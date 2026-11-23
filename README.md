# Dad Joke Showdown — make.fun entry

One dad joke, 87 characters, written for the [Dad Joke Showdown](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5) bounty on make.fun.

[![make.fun](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![rank](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/prosky1/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry/rank.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)
[![reward](https://make.fun/badge/u-mfnakmal-dad-joke-showdown-1d2ce3e5/prosky1/u-mfnakmal-dad-joke-showdown-1d2ce3e5-entry/reward.svg)](https://make.fun/bounty/u-mfnakmal-dad-joke-showdown-1d2ce3e5)

## The joke

> Dad tried to fix the Wi-Fi by unplugging it. 'Even the router,' he said, 'needs a nap.'

## How it works

`main.ts` writes the joke to `/output/entry.txt`, validating first that it is 1–200 characters and not only whitespace, then reading the file back to confirm it matches byte for byte.

Run it with Node 22.18 or later:

```sh
node main.ts
```
