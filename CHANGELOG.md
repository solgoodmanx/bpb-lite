# Changelog

## v0.1.1 - 2026-04-15

### Changed
- refactored the public scan pipeline into explicit modules for sources, platforms, signals, rendering, and shared utilities
- made OKX, DexScreener, Helius, and Printr source lanes explicit in code instead of burying logic in one file
- expanded public platform handling for Pumpfun, Bonk, Meteora, Bags, RISE, LaunchLab, and Raydium context
- widened test coverage around platform inference and source adapter exposure

### Notes
- this release is aimed at making the public repo shape better reflect the actual BPB Lite architecture and fallback posture
- OKX-first posture remains the headline production story, with DexScreener as support and Helius as Solana-native verification

## v0.1.0 - 2026-04-14

### Added
- initial BPB Lite public repo structure
- public Solana scanner script
- plugin packaging files
- README with scan example and confidence framing
- trust matrix for data sources
- contribution and security docs
- basic classifier and confidence tests
- GitHub Actions CI

### Notes
- BPB Lite focuses on compact scan output for Solana token research and triage
- Printr attribution is supported when direct metadata is available
