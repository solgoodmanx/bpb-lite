# BPB Lite

**Early Solana signal intelligence. Powered by OKX OnchainOS.**

BPB (Based Pings Bot) catches tradable memecoin momentum before it becomes obvious. It reads volume injections, momentum shape, liquidity structure, smart-wallet behavior, Streamflow locks, and launch-source context — then tells you whether a setup is worth acting on and why.

BPB Lite is the public skill version: a working signal workflow for AI agents, built for the OKX Build X Skill Arena.

Drop a Solana CA. Get a structured signal read back:

- Is momentum forming or already extended?
- Is the structure clean enough to be real?
- Where did this launch, and where is it trading now?

One scan. One verdict. Operator-ready output.

## What BPB is

BPB is not a generic scanner.

It is a **ping and signal system** designed to surface tradable memecoin momentum early, explain why the setup matters, and filter out weaker structures before they become noise.

Publicly, BPB can honestly say it is built to:

- detect **volume injections** across meaningful time windows
- identify **early runner behavior** and continuation structure
- interpret **momentum quality**, not just raw movement
- read **liquidity, holder concentration, and token structure** before surfacing a setup
- use more than **1,000 tracked wallets** for smart-money context
- read **Streamflow lock** state as part of token-quality analysis
- separate **launch source** from **downstream liquidity venue** when that distinction changes the read
- support **subscriber-facing filtered alerts** by setup quality, platform context, and signal style

## What BPB Lite exposes

BPB Lite gives agents and judges a strong public slice of that system:

- Solana CA scanning
- signal-oriented market snapshotting
- volume and momentum framing across meaningful windows
- platform and launch-source attribution
- support for launchpads and venues including **Pumpfun, Bonk, LaunchLab, Printr, Meteora, DBC, Raydium, and RISE** when evidence is available
- confidence framing for attribution and structure
- research and operator follow-up links

## Why this matters

A lot of memecoin tools can tell you a token exists.

BPB is built to tell you **why it deserves attention now**.

That means the public story should still feel like a signal product:

- it looks for **movement with context**
- it looks for **momentum with structure**
- it looks for **early entries with reasons**, not just charts with numbers

## How BPB thinks

Publicly, BPB can describe its logic like this:

### 1. Volume is the first sign of life
BPB looks for meaningful **volume injections and movement within specific timeframes**, because that is often the earliest visible clue that a token is transitioning from dead air into real momentum.

### 2. Momentum has shape, not just size
A token moving is not enough. BPB cares about whether the move looks like:

- early traction
- runner behavior
- healthy continuation
- cleaner later confirmation

That is why the public signal language stays focused on:

- **EARLY**
- **MOMENTUM**
- **CONFIRMATION**

### 3. Structure matters before a ping matters
BPB checks whether the move is backed by enough real structure to be worth surfacing:

- liquidity quality
- concentration and holder distribution
- smart-wallet presence
- lock context
- platform and launch-source context

### 4. Platform context changes interpretation
A token is not fully understood if you only know where liquidity sits.

BPB separates:

- where the token **launched**
- where the token is **currently trading**

That is why findings like **Printr vs Meteora** matter, and why **RISE** should be treated as platform context rather than some fake generic bucket.

### 5. Alerts should be filterable, not noisy
The full BPB product supports filtered alerts for subscribers. Publicly, that means BPB can describe itself as supporting things like:

- early-entry focused alerts
- momentum continuation alerts
- confirmation-style alerts
- platform-aware filtering
- quality-aware filtering driven by structure, locks, and wallet context

## Core signal language

BPB uses publicly legible signal framing:

- **EARLY** for strong early structure
- **MOMENTUM** for active expansion or runner continuation
- **CONFIRMATION** for cleaner, more established follow-through

That signal layer sits beside platform context. For example, **RISE** is a platform or launch context, not a signal tier.

## Why attribution matters

One of the stronger public findings behind BPB Lite is that launch source and liquidity venue are not always the same thing.

Examples:

- **Printr** can be the launch source while **Meteora** is the downstream liquidity rail
- **RISE** can be treated as real platform context for continuation and momentum interpretation
- that separation improves how the system explains *why* a move looks tradable

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

## Why BPB Lite is a strong Skill Arena fit

- it is a real **signal workflow**, not a thin lookup wrapper
- it gives AI agents a repeatable way to interpret movement, structure, and launch context
- it turns raw token noise into compact, operator-ready signal reads
- it is installable, demoable, and technically legible
- it is grounded in **OKX OnchainOS** as the primary public intelligence layer

## Data sources

BPB Lite is positioned around **OKX OnchainOS** as the primary public intelligence layer.

Supporting sources include:

- DexScreener for pair visibility and market context
- Helius for wallet and Solana-native verification
- Solscan for operator follow-up
- Streamflow for lock context
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
