# MMB Portal (intro.page)

React + Vite + Tailwind landing page. Logo and background use SVGs exported from Figma.

## Assets (Figma exports)

- **Logo:** `public/logo.svg` — Export the logo group from Figma: select it → Right-click → Export → SVG → save as `public/logo.svg`.
- **Background:** `public/background.svg` — [Background frame](https://www.figma.com/design/Sc96Upmn3MpOmvM9jgvaUG/MMB-Portal?node-id=24712-140438&m=dev): select the layer → Export → SVG → save as `public/background.svg`.

Or use the Figma API to pull exports into `public/`:

1. Create a [Figma personal access token](https://www.figma.com/settings).
2. Run: `FIGMA_ACCESS_TOKEN=your_token npm run figma:export`

This overwrites `public/logo.svg` and `public/background.svg`. For the logo, you may need to select only the logo group in Figma, copy its node-id from the URL, and set it in `scripts/export-figma-svg.mjs` (see `NODES.logo`).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run figma:export` — export logo & background SVGs from Figma (requires `FIGMA_ACCESS_TOKEN`)
