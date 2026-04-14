#!/usr/bin/env node

/**
 * BPB Lite public scanner.
 *
 * This version is intentionally lightweight and public-safe. It uses broadly
 * accessible market data plus optional Printr metadata when a bearer token is
 * available in the environment.
 */

import fs from 'fs';
import os from 'os';
import path from 'path';

const GLOBAL_ENV_PATH = path.join(os.homedir(), '.config', 'env', 'global.env');

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const raw = fs.readFileSync(filePath, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvFile(GLOBAL_ENV_PATH);

function isLikelySolanaAddress(value) {
  return typeof value === 'string' && /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(value.trim());
}

function fmtUsd(n) {
  const value = Number(n ?? 0);
  if (!Number.isFinite(value) || value <= 0) return '$0';
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toFixed(0)}`;
}

function fmtPct(n, digits = 1) {
  const value = Number(n);
  if (!Number.isFinite(value)) return '—';
  return `${value.toFixed(digits)}%`;
}

function fmtAge(ms) {
  const value = Number(ms);
  if (!Number.isFinite(value) || value <= 0) return '—';
  const totalSeconds = Math.floor(value / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  if (days > 0) return `${days}d ${hours}h`;
  if (hours > 0) return `${hours}h ${minutes}m`;
  return `${minutes}m`;
}

function chooseBestPair(pairs = []) {
  return [...pairs].sort((a, b) => {
    const liqA = Number(a?.liquidity?.usd ?? 0);
    const liqB = Number(b?.liquidity?.usd ?? 0);
    const volA = Number(a?.volume?.h24 ?? 0);
    const volB = Number(b?.volume?.h24 ?? 0);
    return (liqB - liqA) || (volB - volA);
  })[0] ?? null;
}

async function fetchDexScreener(ca) {
  const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${ca}`);
  if (!res.ok) throw new Error(`DexScreener request failed: ${res.status}`);
  const json = await res.json();
  const pairs = Array.isArray(json?.pairs) ? json.pairs : [];
  return { pairs, bestPair: chooseBestPair(pairs) };
}

function toPrintrCaip10(ca) {
  return `solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp:${ca}`;
}

async function fetchPrintrMetadata(ca) {
  const bearer = process.env.PRINTR_BEARER_TOKEN || process.env.BPB_PRINTR_BEARER_TOKEN;
  if (!bearer) return null;
  const url = `https://api-preview.printr.money/v0/tokens/${encodeURIComponent(toPrintrCaip10(ca))}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${bearer}`,
      Accept: 'application/json',
    },
  });
  if (!res.ok) return null;
  return res.json();
}

function normalizeTextParts(parts = []) {
  return parts
    .flatMap((part) => Array.isArray(part) ? part : [part])
    .map((part) => String(part ?? '').toLowerCase())
    .filter(Boolean)
    .join(' ');
}

function inferPlatform({ ca, bestPair, printr }) {
  if (printr?.id || printr?.tokenId) {
    return {
      platform: 'Printr',
      note: 'Printr-native token. In our public read, Printr is the launch source and Meteora is the downstream liquidity rail when that migration shows up.',
    };
  }

  const baseText = normalizeTextParts([
    bestPair?.dexId,
    bestPair?.labels,
    bestPair?.url,
    bestPair?.baseToken?.name,
    bestPair?.baseToken?.symbol,
    bestPair?.quoteToken?.symbol,
    ca,
  ]);

  if (baseText.includes('pumpfun') || ca.toLowerCase().endsWith('pump')) {
    return { platform: 'Pumpfun', note: 'Pumpfun-style route detected from pair metadata or mint shape.' };
  }
  if (baseText.includes('launchlab')) {
    return { platform: 'LaunchLab', note: 'LaunchLab hint detected from public pair metadata.' };
  }
  if (baseText.includes('bonk')) {
    return { platform: 'Bonk', note: 'Bonk ecosystem hint detected from public pair metadata.' };
  }
  if (baseText.includes('raydium')) {
    return { platform: 'Raydium', note: 'Raydium liquidity or route hint detected from public pair metadata.' };
  }
  if (baseText.includes('meteora') || baseText.includes('damm')) {
    return {
      platform: 'Meteora',
      note: 'Meteora liquidity rail detected. Public repo keeps this as a platform hint, while deeper launch-source attribution can sit above it.',
    };
  }

  return { platform: 'Unknown', note: 'No strong launch/platform attribution resolved from public sources.' };
}

function inferSignal(snapshot = {}) {
  const mc = Number(snapshot.marketCapUsd ?? 0);
  const vol1h = Number(snapshot.volume1hUsd ?? 0);
  const liq = Number(snapshot.liquidityUsd ?? 0);
  const holders = Number(snapshot.holders ?? 0);

  if (mc > 0 && vol1h >= mc && liq >= 10000 && holders >= 150) return 'EARLY';
  if (mc > 0 && vol1h >= mc * 0.6 && liq >= 8000) return 'MOMENTUM';
  if (mc > 0 && vol1h >= mc * 0.35) return 'CONFIRMATION';
  return 'RISE';
}

function buildHeadline(signal) {
  if (signal === 'EARLY') return '🟣 EARLY';
  if (signal === 'MOMENTUM') return '🟢 MOMENTUM';
  if (signal === 'CONFIRMATION') return '🔵 CONFIRMATION';
  return '🟠 RISE';
}

function buildVerdict(snapshot) {
  const { signal, platform, marketCapUsd, volume1hUsd, liquidityUsd, holders } = snapshot;
  const lines = [];

  if (signal === 'EARLY') lines.push('Early traction is live and the public structure still looks reasonably intact.');
  else if (signal === 'MOMENTUM') lines.push('This looks like an active continuation phase rather than a cold starter.');
  else if (signal === 'CONFIRMATION') lines.push('Structure looks more established here, with less early asymmetry but cleaner confirmation.');
  else lines.push('This reads more like a RISE-style continuation hint than a clean early entry.');

  if (platform === 'Printr') lines.push('Printr attribution was confirmed directly, so this should not be flattened into generic Meteora-only identity.');
  if (Number(volume1hUsd) > Number(marketCapUsd) && Number(liquidityUsd) >= 10000) lines.push('Volume is healthy relative to MC and liquidity is at least non-trivial.');
  if (Number(holders) > 0 && Number(holders) < 100) lines.push('Holder count is still thin, so treat structure as fragile.');

  return lines.join(' ');
}

function buildLinks(ca, bestPair) {
  const pairUrl = bestPair?.url || null;
  const lines = [];
  if (pairUrl) lines.push(`DEX: ${pairUrl}`);
  lines.push(`Explorer: https://solscan.io/token/${ca}`);
  lines.push(`X Search: https://x.com/search?q=${encodeURIComponent(ca)}`);
  return lines.join('\n');
}

async function buildScan(ca) {
  const { pairs, bestPair } = await fetchDexScreener(ca);
  const printr = await fetchPrintrMetadata(ca).catch(() => null);
  const platformHint = inferPlatform({ ca, bestPair, printr });

  const pairCreatedAt = Number(bestPair?.pairCreatedAt ?? 0);
  const ageMs = pairCreatedAt > 0 ? Date.now() - pairCreatedAt : null;
  const snapshot = {
    token: bestPair?.baseToken?.name ?? printr?.name ?? 'UNKNOWN',
    symbol: bestPair?.baseToken?.symbol ?? printr?.symbol ?? 'UNKNOWN',
    contractAddress: ca,
    platform: platformHint.platform,
    platformNote: platformHint.note,
    marketCapUsd: Number(bestPair?.marketCap ?? bestPair?.fdv ?? 0),
    volume1hUsd: Number(bestPair?.volume?.h1 ?? 0),
    liquidityUsd: Number(bestPair?.liquidity?.usd ?? 0),
    holders: null,
    top10Pct: null,
    smartHolders: null,
    ageMs,
    pairCount: pairs.length,
    dexId: bestPair?.dexId ?? null,
  };

  snapshot.signal = inferSignal(snapshot);
  snapshot.verdict = buildVerdict(snapshot);
  snapshot.links = buildLinks(ca, bestPair);

  return `${buildHeadline(snapshot.signal)} · BPB Lite\n${snapshot.symbol} (${snapshot.token})\nCA: ${snapshot.contractAddress}\n\n📍 Platform: ${snapshot.platform}\n💰 MC: ${fmtUsd(snapshot.marketCapUsd)}\n📊 Vol 1h: ${fmtUsd(snapshot.volume1hUsd)}\n💧 Liq: ${fmtUsd(snapshot.liquidityUsd)}\n⏳ Age: ${fmtAge(snapshot.ageMs)}\n🧩 Pairs seen: ${snapshot.pairCount}\n👥 Holders: ${snapshot.holders ?? '—'}\n🏦 Top10: ${snapshot.top10Pct != null ? fmtPct(snapshot.top10Pct) : '—'}\n👀 Smart holders: ${snapshot.smartHolders ?? '—'}\n\nVerdict\n${snapshot.verdict}\n\nPlatform note\n${snapshot.platformNote}\n\nLinks\n${snapshot.links}`;
}

const ca = process.argv[2];

if (!isLikelySolanaAddress(ca)) {
  console.error('Usage: node scripts/scan-token.js <solana-contract-address>');
  process.exit(1);
}

buildScan(ca)
  .then((output) => console.log(output))
  .catch((error) => {
    console.error(`BPB Lite scan failed: ${error.message}`);
    process.exit(1);
  });
