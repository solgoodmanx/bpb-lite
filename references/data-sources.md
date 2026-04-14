# Data Sources and Trust Matrix

BPB Lite combines public market context with attribution-aware hints. The goal is not to force certainty, but to produce a compact scan with clear evidence.

## Source posture

For the public hackathon positioning, BPB Lite is presented as an **OKX OnchainOS-first** workflow.

Other sources support verification, discovery, and follow-up.

## Trust matrix

| Source | Role | Typical fields | Confidence impact | Notes |
|---|---|---|---|---|
| OKX OnchainOS | Primary intelligence layer | market structure, token context, trend framing | High | Main public-facing data story |
| DexScreener | Market and pair visibility | liquidity, volume, market cap, pair URLs, age | Medium to High | Strong for public pair context |
| Printr preview API | Direct attribution | launch source, token identity | High | Best source for confirmed Printr-native tokens |
| Helius | Solana-native verification | holder and chain verification | Medium | Useful support layer, not the main story |
| Solscan | Explorer follow-up | token page, transaction inspection | Low to Medium | Best used as operator follow-up |
| X search | Discovery follow-up | contract search, social lookup | Low | Context only, not attribution proof |

## Attribution policy

- Use **Printr** when direct token metadata confirms it.
- Use **Meteora** when public pair or rail evidence points to it.
- Use **Unknown** when the evidence does not support a confident label.
- Keep launch-source claims separate from liquidity-venue hints when both exist.

## Reliability notes

- Not every field is always available from public sources.
- Confidence should fall when attribution is indirect or market structure is sparse.
- The scanner should degrade gracefully and still produce a readable partial result.

## Helpful references

- https://web3.okx.com/llms.txt
- https://web3.okx.com/onchainos
- https://github.com/okx/plugin-store/tree/main/skills/okx-buildx-hackathon-agent-track
