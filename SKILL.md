---
name: bpb-lite
description: "AI-agent skill for Solana memecoin triage with market context, platform attribution hints, confidence tiers, and compact research output"
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

BPB Lite helps an AI agent turn a Solana contract address into a compact, readable token scan.

Use it when the user wants a fast answer about market state, launch or liquidity venue hints, signal posture, and follow-up links. It is intended for research and decision support.

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
2. Prefer stable market data sources first.
3. If some fields are unavailable, continue and return a partial scan instead of failing.
4. Keep outputs compact and readable.
5. Use evidence-based wording for platform attribution and confidence.

## Core workflow

1. Resolve token metadata from the contract address.
2. Pull market context such as market cap, liquidity, volume, and age.
3. Add concentration or holder fields when available.
4. Detect launch source or liquidity venue hints when possible.
5. Assign one public signal label:
   - EARLY
   - MOMENTUM
   - CONFIRMATION
   - RISE
6. Add a confidence tier:
   - High
   - Medium
   - Low
7. Return a short verdict and research links.

## Attribution rules

Preserve these public-facing rules:

- Treat **Printr** as a launch source when direct metadata confirms it.
- Treat **Meteora** as a liquidity venue when public pair data points there.
- Keep coverage broad enough for public hints across **Pumpfun, LaunchLab, Raydium, Bonk, Printr, and Meteora**.
- Use **RISE** when the move looks active but no longer reads like a clean early setup.
- Prefer **Unknown** over invented precision.

## Output shape

A strong BPB Lite response should usually include:

- Token name and symbol
- Contract address
- Platform or launch hint
- Confidence tier
- MC, liquidity, volume, holders, age
- Concentration snapshot when available
- Smart-holder presence when available
- Signal label
- Evidence bullets
- Short verdict
- Research links

## Guardrails

- Do not present BPB Lite as autonomous trading or financial advice.
- Do not claim access to private production thresholds or alerting logic.
- Do not expose private routing, suppression, or re-ping machinery.
- If attribution is uncertain, label it as a hint or unknown.
- Favor honest partial answers over fake precision.

## References

See `references/data-sources.md` for the trust matrix and source posture.

## Local packaging note

For OKX Plugin Store style local setup:

```bash
npx skills add okx/plugin-store --skill plugin-store
```

Helpful OKX references:

- `https://web3.okx.com/llms.txt`
- `https://web3.okx.com/onchainos`
- `https://github.com/okx/plugin-store/tree/main/skills/okx-buildx-hackathon-agent-track`
