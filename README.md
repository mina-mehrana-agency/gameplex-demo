# Gameplex: website concept

Website concept for Gameplex, a board game café, arcade and party venue in Thornhill, Ontario. Built by Mina at Mehrana Marketing.

Live demo: https://mina-mehrana-agency.github.io/gameplex-demo/

- Hero dice game: WebGL neon dice in a hallway; every roll lands on tonight's deal.
- "Your night, one move at a time": glass layers stack onto a game board as you scroll (CSS 3D).
- Liquid glass header, interactive food menu, events, board game library, gallery and a party quote form.
- Glass 3D objects rendered with three.js and saved as small WebP files.

Built with Astro and plain CSS, no UI framework. The demo is set to noindex.

## Run locally

```
pnpm install
node dev.mjs      # http://127.0.0.1:4370
node build.mjs    # static build into dist/
```
