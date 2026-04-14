# BPB Lite

> **One-line pitch:** An OKX OnchainOS-first AI-agent skill for fast Solana memecoin signal triage, turning any contract address into a compact market, platform, and momentum snapshot.
>
> **Hackathon fit:** Built for the OKX Build X Skill Arena as a reusable plugin-style workflow, not a one-off app.

BPB Lite is a lightweight AI-agent skill for fast Solana memecoin triage.

It turns a Solana contract address into a structured scan with market context, holder concentration, launch/platform hints, signal labeling, and useful research links. It is designed for research and decision support, not autonomous mass-alerting.

For the OKX Build X Hackathon, the public positioning is intentionally **OKX OnchainOS first**: OKX is the primary intelligence layer, while public pair and explorer surfaces support verification and operator follow-up.

The public version also carries a few practical findings from live memecoin research:

- **Printr should be treated as a launch source**, not flattened into generic Meteora
- **Meteora often acts as the downstream liquidity rail**, not always the true origin
- **RISE is useful as a public continuation-style read**, even when the private production system uses deeper tiering
- The public repo still covers the normal Solana launch/platform surface, including **Pumpfun, LaunchLab, Raydium, Bonk, Printr, and Meteora** when public clues are available

## What it does

- Resolves a Solana token by contract address
- Uses **OKX OnchainOS-aligned market and token intel** as the main public-facing data story
- Pulls a compact market snapshot
- Surfaces holder and liquidity structure when available
- Adds launch source or platform hints when detectable
- Covers common public Solana launch/platform hints like Pumpfun, LaunchLab, Raydium, Bonk, Printr, and Meteora
- Assigns a simple public signal label: EARLY, MOMENTUM, CONFIRMATION, or RISE
- Returns a short verdict plus research links

## What it is not

BPB Lite is not the full Based Pings production system.

It does not include private alert-routing, production thresholds, proprietary suppression logic, milestone re-pings, or any of the internal automation used in a live trading bot.

## Intended use

BPB Lite is best used when an agent or operator wants to quickly answer questions like:

- "scan this CA"
- "is this still early or already extended?"
- "what platform did this come from?"
- "give me a compact signal snapshot"

## Example output

```text
EARLY · BPB Lite

Token: BELIEF (BELIEF)
CA: 29CWsqH84TykHDDwA6DtETUtXQPuKbVgKCmxtkBsbrrr
Platform: Printr
MC: $42.0K
Vol 1h: $61.0K
Liq: $18.0K
Age: 14m
Pairs seen: 1
Holders: —
Top10: —
Smart holders: —

Verdict:
Early traction is live and the public structure still looks reasonably intact. Printr attribution was confirmed directly, so this should not be flattened into generic Meteora-only identity.

Platform note:
Printr-native token. In our public read, Printr is the launch source and Meteora is the downstream liquidity rail when that migration shows up.

Links:
DEX: https://dexscreener.com/solana/example
Explorer: https://solscan.io/token/29CWsqH84TykHDDwA6DtETUtXQPuKbVgKCmxtkBsbrrr
X Search: https://x.com/search?q=29CWsqH84TykHDDwA6DtETUtXQPuKbVgKCmxtkBsbrrr
```

## Notes on platform attribution

BPB Lite keeps platform attribution modest and honest.

- If Printr resolves directly, it is labeled **Printr**
- If public pair metadata mainly shows Meteora or DAMM rails, it is labeled **Meteora** as a platform hint
- If neither is strong enough, the scan says **Unknown** instead of inventing precision

## Why this fits Skill Arena

BPB Lite is shaped as a reusable agent workflow, not a one-off app.

- It gives agents a repeatable Solana token triage flow
- It is easy to install and demo as a plugin skill
- It visibly leans on **OKX OnchainOS** as the main intelligence layer
- It keeps the public surface useful without exposing private production alerting logic

## Data source posture

The public story should stay simple and credible:

- **OKX OnchainOS** = primary intelligence layer
- **DexScreener** = pair visibility and fallback context
- **Helius** = optional Solana-native verification layer
- **Solscan** = explorer deep-links for operator trust

This repo should look clearly OKX-native without pretending every field comes from a single endpoint.

## Setup

### Optional environment setup

If you want direct Printr attribution instead of public-only fallback, copy `.env.example` and set a valid preview bearer token.

### OKX Plugin Store

For the OKX Plugin Store flow, install the plugin-store tooling with:

```bash
npx skills add okx/plugin-store --skill plugin-store
```

### Helpful OKX context

For hackathon-aligned docs and agent context, keep these nearby:

- `https://web3.okx.com/llms.txt`
- `https://web3.okx.com/onchainos`
- `https://github.com/okx/plugin-store/tree/main/skills/okx-buildx-hackathon-agent-track`

## Packaging

This repo is structured as an OKX / Claude-style plugin skill package:

- `plugin.yaml`
- `.claude-plugin/plugin.json`
- `SKILL.md`

## Socials and links

- X: https://x.com/BasedPings
- Telegram: https://t.me/BasedPingBot
- OKX ref: https://web3.okx.com/join/BasedPings

## License

MIT
