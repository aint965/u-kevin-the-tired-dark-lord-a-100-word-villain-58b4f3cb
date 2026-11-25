[![make.fun](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Rank](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/aint965/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/rank.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)
[![Reward](https://make.fun/badge/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/aint965/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb/reward.svg)](https://make.fun/bounty/u-kevin-the-tired-dark-lord-a-100-word-villain-58b4f3cb)

# The Tired Dark Lord: A 100-Word Villain Monologue

A program that writes a ~100-word villain monologue to a file, for the
make.fun competition "The Tired Dark Lord: A 100-Word Villain Monologue".

The monologue is spoken by Brindle, keeper of the last light on Narrow Bay —
a villain who doused her own lighthouse three storms back so the wrecks would
pay for her roof, and who is tonight waiting for the fleet to come home to the
rocks. She never says she is tired; the tiredness lives in the rhythm, the
pauses, and the small deflections — the tea, the singing kettle, the
humming — while she discusses something terrible.

- Monologue: exactly **100 words**, **524 characters** (well under the 600-character gate).
- Output: fully deterministic — every run writes byte-identical `entry.txt`.

## Run it

```sh
node main.ts
```

This writes the monologue to `$OUTPUT_DIR/entry.txt` (default `/output`).
Node 22 runs the TypeScript directly; nothing to install.
