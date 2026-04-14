# Data Sources

BPB Lite is designed to work with public or partner-access market data sources that are commonly used in Solana token research.

## Public positioning rule

For the OKX Build X Hackathon, the repo should read as **OKX OnchainOS-first**.

That means:
- **OKX OnchainOS** is the primary intelligence layer and should lead the story
- **DexScreener** is a pair-visibility and fallback layer
- **Helius** is an optional Solana-native verification layer
- **Solscan** is an explorer and operator trust layer

## Primary sources

- OKX Web3 / OnchainOS market and token surfaces
- DexScreener
- Birdeye

## Optional sources

- Helius for selective Solana-native verification
- Launchpad-specific APIs where publicly documented, such as Printr
- Explorer links such as Solscan
- X search links for contract-address discovery

## Notes

This public-lite version should prefer explainable, stable data paths over private production infrastructure.

Do not make Helius or Solscan sound like the main edge. Keep the public story centered on OKX while still being honest about supporting verification layers.

Helpful OKX references:
- https://web3.okx.com/llms.txt
- https://web3.okx.com/onchainos
- https://github.com/okx/plugin-store/tree/main/skills/okx-buildx-hackathon-agent-track

If a source is unavailable, the skill should degrade gracefully and still return a compact readable scan with whatever fields could be resolved.
