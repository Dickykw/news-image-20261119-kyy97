# The World Today — 19 November 2026

[![make.fun bounty](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Dickykw/news-image-20261119-kyy97/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Dickykw/news-image-20261119-kyy97/reward.svg)](https://make.fun/bounty/news-image-20261119)

One image that sums up the world's news of Thursday 19 November 2026, drawn as a
front-page newspaper: masthead plus the date in large type, one lead story, four
smaller panels, and a footer ticker of the day's remaining stories.

## The day in the picture

- **Lead — Trump, Xi and Putin meet at APEC Shenzhen.** Three leaders gather in
  Shenzhen for trade and security talks (symbolic silhouettes, no faces).
- **US–Iran fire in the Gulf.** Gulf bases hit: Kuwait and Bahrain.
- **GTA VI launches worldwide.** Vice City returns on release day.
- **Nvidia halts China chip shipments.** Anthropic files a $81.3bn IPO.
- **Ukraine: €45bn EU loan agreed.** Crimean Bridge attacked.
- **Also:** Myanmar verdict, Gaza, Voyager 1, Van Gogh $190.4m, Jeffries.

## How it is built

`entry.svg` is the hand-drawn flat-vector source (1024×1024). It is rendered once
to `entry.png` (1024×1024, under 1 MiB) with a headless browser screenshot, and
`main.ts` copies that PNG unchanged to `$MAKEFUN_OUTPUT_DIR/entry.png`, so every
run writes byte-identical output. Standard library only, no network.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
