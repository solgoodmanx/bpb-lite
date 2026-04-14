---
name: bpb-lite
description: "Reusable AI-agent skill for Solana memecoin signal triage and structured token scans, positioned for OKX Build X Skill Arena with OKX OnchainOS as the primary intelligence layer"
version: "0.1.0"
author: "solgoodman"
tags:
  - solana
  - memecoin
  - signals
  - analytics
---

# BPB Lite

## Overview

BPB Lite helps an AI agent turn a Solana contract address into a compact, readable memecoin scan.

Use it when the user wants a fast structured answer about a token's market state, concentration, launch or platform hints, and broad signal posture. This is a public-lite research skill, not a production alert engine.

For hackathon positioning, present it as an **OKX OnchainOS-first** Solana signal triage skill. Keep OKX as the headline. Use other Solana sources only as supporting verification or link-out layers.

It should stay broad across the normal Solana surface. Do not behave as if the repo only understands Printr or Meteora. Public platform hints can include Pumpfun, LaunchLab, Raydium, Bonk, Printr, and Meteora when evidence supports them.

## When to use

Use BPB Lite when the user says things like:

- "scan this CA"
- "check this token"
- "is this still early?"
- "what platform did this launch on?"
- "give me a quick signal snapshot"

## Pre-flight checks

Before using this skill:

1. Confirm the input is a Solana contract address.
2. Prefer stable market data sources first, with **OKX OnchainOS** as the primary story when possible.
3. If some fields are unavailable, continue and return a partial scan instead of failing.
4. Keep outputs compact and readable.
5. Do not oversell supporting sources as if they are the core edge.

## Core workflow

1. Resolve token metadata from the contract address.
2. Pull market context such as market cap, liquidity, volume, and holder count.
3. Add concentration fields if available, such as top holders or insider-style distribution stats.
4. Detect launch source or platform hints when possible.
5. Assign one public signal label:
   - EARLY
   - MOMENTUM
   - CONFIRMATION
   - RISE
6. Return a short verdict and research links.

### Public attribution findings to preserve

When this skill is used, keep these practical attribution lessons in mind:

- Treat **Printr** as a launch source when direct metadata confirms it.
- Treat **Meteora** as a liquidity venue or downstream rail when that is what public pair data actually shows.
- Keep coverage broad enough for normal public hints across **Pumpfun, LaunchLab, Raydium, Bonk, Printr, and Meteora**.
- Use **RISE** as a public-facing continuation label when the move looks active but is no longer a clean early entry.

## Output shape

A good BPB Lite response should usually include:

- Token name and symbol
- Contract address
- Platform or launch hint
- MC, liquidity, volume, holders, age
- Concentration snapshot
- Smart-holder presence if available
- Signal label
- Short verdict
- Research links

## Signal labels

### EARLY
Use when the token appears to be in an earlier traction phase with acceptable enough structure.

### MOMENTUM
Use when the token is already moving and follow-through looks active.

### CONFIRMATION
Use when the move looks more established and the structure is clearer, even if asymmetry is lower.

### RISE
Use when the token is visibly expanding or continuing, but the public read no longer looks like a clean EARLY setup.

## Guardrails

- Do not present BPB Lite as autonomous trading or financial advice.
- Do not imply hidden production-grade edge.
- Do not expose private thresholds, private routing logic, or internal alerting machinery.
- If platform attribution is uncertain, label it as a hint or unknown.
- Favor honest partial answers over fake precision.
- Keep **Helius** in a supporting verification role, not the headline story.
- Keep **Solscan** as an explorer or operator deep-link, not a core intelligence layer.

## Example

```text
EARLY · BPB Lite

Token: BELIEF
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

## References

See `references/data-sources.md` for the intended source profile.

## Plugin Store note

For OKX Plugin Store local setup, install the helper with:

```bash
npx skills add okx/plugin-store --skill plugin-store
```

For hackathon context and positioning, keep these in mind:

- `https://web3.okx.com/llms.txt`
- `https://web3.okx.com/onchainos`
- `https://github.com/okx/plugin-store/tree/main/skills/okx-buildx-hackathon-agent-track`

## Social footnote

- X: https://x.com/BasedPings
- Telegram: https://t.me/BasedPingsBot
- OKX ref: https://web3.okx.com/join/BasedPings
