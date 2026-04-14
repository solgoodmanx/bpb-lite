# BPB Lite

**BPB** stands for **Based Pings Bot**.

BPB is an automated Solana memecoin signal bot built to catch early and accurate entries by reading volume injections, momentum across specific time windows, liquidity and holder structure, smart-wallet behavior, and token-level risk context.

**BPB Lite** is the public plugin-style version of that product, built for the OKX Build X Skill Arena. It packages the signal and intelligence layer into an AI-agent workflow without exposing sensitive thresholds, private routing, or internal delivery logic.

## What BPB does

Based Pings Bot is centered on automated signals and volume insight, not just static token lookup.

Publicly, BPB can be described as a system that:

- tracks momentum and volume expansion across tight time windows
- looks for early continuation and runner behavior
- reads liquidity and concentration structure before surfacing a setup
- uses more than **1,000 tracked wallets** as part of smart-money context
- reads **Streamflow lock** state as part of token quality context
- separates launch source from downstream liquidity venue when that distinction matters
- supports filtered alerts for subscribers based on signal style and setup quality

## What BPB Lite brings into public view

BPB Lite gives AI agents a credible public version of that workflow:

- Solana CA scanning
- market snapshot, including MC, volume, liquidity, and age
- momentum framing based on volume and movement within meaningful windows
- platform and launch-source attribution hints
- support for launchpads and venues including **Pumpfun, Bonk, LaunchLab, Printr, Meteora, DBC, Raydium, and RISE** when evidence is available
- confidence framing for attribution and market structure
- research and operator follow-up links

## Product direction

BPB Lite should read like a signal product, not a generic scanner.

The public story is:

- **BPB is a ping bot**
- **BPB Lite is its public-facing intelligence layer**
- the edge comes from combining market movement, timing, wallet behavior, and structure into earlier and cleaner signal reads

We do not publish private thresholds or internal alert-routing rules, but we do say plainly what the system is built to observe.

## Core signal language

BPB focuses on publicly legible setup language such as:

- **EARLY** for strong early structure
- **MOMENTUM** for active expansion or continuation
- **CONFIRMATION** for cleaner, more established follow-through

That signal language sits alongside platform context. For example, **RISE** is a platform or launch context, not a signal tier.

## Why the attribution matters

One of the important public findings behind BPB Lite is that launch source and liquidity venue are not always the same thing.

Examples:

- **Printr** can be the launch source while **Meteora** is the downstream liquidity rail
- **RISE** can be treated as a real platform context instead of being flattened into generic venue noise
- that separation improves how momentum is interpreted and how early continuation is framed

## Example, Pumpfun first

### Input

```text
DnutZjgbnLqj4gYEhphuxajJn1gC6W2rL9CX7fmLpump
```

### Output

```text
🟣 EARLY · BPB Lite
LNMNMMMC (LeNewMemeNiceMayMayManCoin)
CA: DnutZjgbnLqj4gYEhphuxajJn1gC6W2rL9CX7fmLpump

📍 Platform: Pumpfun
🎯 Confidence: High
💰 MC: $25.6K
📊 Vol 1h: $47.8K
💧 Liq: $14.2K
⏳ Age: 13m
🧩 Pairs seen: 1
👥 Holders: 190
🏦 Top10: 22.0%
👀 Smart holders: 4

Evidence
• Volume expansion is strong relative to market cap
• Liquidity is real enough for a live early setup
• Holder structure is still within an acceptable public range

Verdict
Momentum is arriving early and the public structure still reads like a live first-leg opportunity rather than a late cleanup entry.

Links
DEX: https://dexscreener.com/solana/2b34buxawe2gf6aj4qg6mzsgw5t16tcyk25xnkcffo3t
Explorer: https://solscan.io/token/DnutZjgbnLqj4gYEhphuxajJn1gC6W2rL9CX7fmLpump
X Search: https://x.com/search?q=DnutZjgbnLqj4gYEhphuxajJn1gC6W2rL9CX7fmLpump
```

## Printr and RISE matter too

BPB Lite also highlights launch-source intelligence that simpler tools often miss.

- **Printr** is not just “Meteora again” when direct metadata confirms it
- **RISE** can be treated as its own platform context for momentum and continuation analysis
- this helps BPB explain *why* a move looks interesting, not just *that* it moved

## Data sources

BPB Lite is positioned around **OKX OnchainOS** as the primary public intelligence layer.

Supporting sources include:

- DexScreener for pair visibility and market context
- Helius for wallet and Solana-native verification
- Solscan for operator follow-up
- Printr preview API for direct attribution when configured

See `references/data-sources.md` for the trust matrix.

## Subscriber filters and alerts

The full BPB product supports alert filtering by setup style and quality. Publicly, that means BPB can be described as supporting things like:

- early-entry focused alerts
- momentum continuation alerts
- confirmation-style alerts
- platform-aware filtering
- quality filters driven by structure, locks, and wallet context

BPB Lite focuses on the intelligence and explanation layer that powers those kinds of alerts.

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
