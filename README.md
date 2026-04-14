# BPB Lite

BPB Lite is an AI-agent skill for fast Solana memecoin triage.

Built for the OKX Build X Skill Arena, it turns a Solana contract address into a compact market snapshot with platform attribution hints, confidence framing, and research links. The project is designed for token discovery, research, and operator decision support.

## Why BPB Lite

Memecoin research is usually fragmented across launchpads, charts, explorers, and social search. BPB Lite gives agents a cleaner first pass:

- resolve a Solana token from its contract address
- surface market structure and liquidity context
- identify likely launch or liquidity venues when evidence exists
- label the setup with a simple public signal tier
- return evidence and follow-up links in one compact response

## Core capabilities

- Solana CA scanning
- market snapshot, including MC, volume, liquidity, and age
- platform hints across Pumpfun, LaunchLab, Raydium, Bonk, Printr, and Meteora
- public signal tiers: **EARLY**, **MOMENTUM**, **CONFIRMATION**, **RISE**
- evidence-based confidence framing
- direct Printr attribution when available
- clean operator links for DEX, explorer, and search follow-up

## Example scan

### Input

```text
29CWsqH84TykHDDwA6DtETUtXQPuKbVgKCmxtkBsbrrr
```

### Output

```text
🟣 EARLY · BPB Lite
BELIEF (BELIEF)
CA: 29CWsqH84TykHDDwA6DtETUtXQPuKbVgKCmxtkBsbrrr

📍 Platform: Printr
🎯 Confidence: High
💰 MC: $42.0K
📊 Vol 1h: $61.0K
💧 Liq: $18.0K
⏳ Age: 14m
🧩 Pairs seen: 1
👥 Holders: —
🏦 Top10: —
👀 Smart holders: —

Evidence
• Direct Printr attribution resolved
• Volume is healthy relative to market cap
• Liquidity is established enough for continued monitoring

Verdict
Early traction is live and the current public structure still looks intact.

Links
DEX: https://dexscreener.com/solana/example
Explorer: https://solscan.io/token/29CWsqH84TykHDDwA6DtETUtXQPuKbVgKCmxtkBsbrrr
X Search: https://x.com/search?q=29CWsqH84TykHDDwA6DtETUtXQPuKbVgKCmxtkBsbrrr
```

## Platform attribution

BPB Lite uses evidence-based attribution and avoids overstating certainty.

- **Printr** is used when direct token metadata confirms it
- **Meteora** is used when public liquidity or rail evidence points there
- **Unknown** is preferred over forced precision when evidence is weak

## Confidence tiers

BPB Lite adds a public confidence band to each scan:

- **High**: direct attribution or multiple strong supporting signals
- **Medium**: useful public context, but incomplete attribution
- **Low**: weak attribution or sparse market structure

## Data sources

BPB Lite is positioned around **OKX OnchainOS** as its primary intelligence layer for the public Skill Arena story.

Supporting sources include:

- DexScreener for pair visibility and market context
- Helius for optional Solana-native verification
- Solscan for explorer follow-up
- Printr preview API for direct attribution when configured

See `references/data-sources.md` for the trust matrix.

## Installation

### Optional environment setup

Copy `.env.example` if you want direct Printr attribution:

```bash
cp .env.example .env
```

### Plugin packaging

This repo includes:

- `plugin.yaml`
- `.claude-plugin/plugin.json`
- `SKILL.md`

## Development

Run the public scanner:

```bash
node scripts/scan-token.js <solana-contract-address>
```

Run tests:

```bash
npm test
```

## Project docs

- `references/data-sources.md`
- `references/moltbook-submission.md`
- `SECURITY.md`
- `CONTRIBUTING.md`

## Socials

- X: <https://x.com/BasedPings>
- Telegram: <https://t.me/BasedPingBot>
- OKX ref: <https://web3.okx.com/join/BasedPings>

## License

MIT
