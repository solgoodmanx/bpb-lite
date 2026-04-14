# Data Sources

BPB Lite is designed to work with public or partner-access market data sources that are commonly used in Solana token research.

## Primary sources

- OKX Web3 / Onchain OS market endpoints
- DexScreener
- Birdeye

## Optional sources

- Launchpad-specific APIs where publicly documented
- Explorer links such as Solscan
- X search links for contract-address discovery

## Notes

This public-lite version should prefer explainable, stable data paths over private production infrastructure.

If a source is unavailable, the skill should degrade gracefully and still return a compact readable scan with whatever fields could be resolved.
