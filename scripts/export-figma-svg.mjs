#!/usr/bin/env node
/**
 * Export Figma nodes as SVG and save to public/.
 * Requires FIGMA_ACCESS_TOKEN (Figma → Settings → Personal access tokens).
 *
 * Usage: FIGMA_ACCESS_TOKEN=your_token node scripts/export-figma-svg.mjs
 *
 * Or export manually in Figma: select node → Right-click → Export → SVG → save to public/
 */

const FIGMA_FILE_KEY = 'Sc96Upmn3MpOmvM9jgvaUG';
const NODES = {
  // Logo: in Figma, select only the logo group, copy node-id from URL (e.g. 24712-XXXXX → 24712:XXXXX)
  logo: '24712:140382',
  // Background layer: https://www.figma.com/design/.../MMB-Portal?node-id=24712-140438
  background: '24712:140438',
};
const OUT_DIR = new URL('../public/', import.meta.url);

async function exportFigmaSvgs() {
  const token = process.env.FIGMA_ACCESS_TOKEN;
  if (!token) {
    console.error('Set FIGMA_ACCESS_TOKEN (Figma → Settings → Personal access tokens).');
    process.exit(1);
  }

  const nodeIds = Object.values(NODES).join(',');
  const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(nodeIds)}&format=svg`;
  const res = await fetch(url, {
    headers: { 'X-Figma-Token': token },
  });

  if (!res.ok) {
    console.error('Figma API error:', res.status, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  if (data.err) {
    console.error('Figma error:', data.err);
    process.exit(1);
  }

  const entries = Object.entries(NODES);
  for (const [name, id] of entries) {
    const imageUrl = data.images?.[id];
    if (!imageUrl) {
      console.warn(`No URL for ${name} (${id})`);
      continue;
    }
    const svgRes = await fetch(imageUrl, { headers: { 'X-Figma-Token': token } });
    if (!svgRes.ok) {
      console.warn(`Failed to fetch SVG for ${name}:`, svgRes.status);
      continue;
    }
    const svg = await svgRes.text();
    const outPath = new URL(`${name}.svg`, OUT_DIR);
    await import('fs/promises').then((fs) => fs.writeFile(outPath, svg, 'utf8'));
    console.log(`Wrote ${outPath.pathname}`);
  }
}

exportFigmaSvgs().catch((err) => {
  console.error(err);
  process.exit(1);
});
