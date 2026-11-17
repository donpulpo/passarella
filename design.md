# Design: passarel·la

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Feature Stack (inner pages: Banner hero, then sections)
- Theme: brand (the bridge mark, saffron on ink, Fraunces and Inter)
- Axes: dark/roman-serif/warm · posture: Restrained

## Tokens
`src/css/tokens.css` is the source of truth. The roles:
```css
:root {
  --color-paper: oklch(20.6% 0.019 252);  --color-paper-2: oklch(24.8% 0.023 251);  --color-paper-3: oklch(30.8% 0.025 249);
  --color-ink: oklch(93.5% 0.013 82);  --color-ink-2: oklch(84.9% 0.010 253);  --color-muted: oklch(75.4% 0.014 252);  --color-rule: oklch(36.6% 0.026 249);
  --color-accent: oklch(78.5% 0.131 82);  --color-accent-ink: oklch(20.6% 0.019 252);  --color-focus: oklch(81% 0.17 82);
  --font-display: "Fraunces", Georgia, serif;  --font-body: "Inter", system-ui, sans-serif;  --font-outlier: var(--font-body);
  --radius-card: 10px;  --radius-input: 8px;  --rule-hair: 1px;  --shadow-card: none;
}
```
The spacing scale, the type scale, the easings and the durations are the scaffold's and live in `tokens.css`. Fraunces at 500 for every head, Inter at 400 and 600.

## Rules the pages share
- One saffron signal: the primary button, figures, focus rings, link underlines. Never a saffron phrase inside a heading.
- No labels above headings. A page's place is a breadcrumb; a stage or a term heads its own row.
- Sections part by whitespace, hairlines and the paper-2 band, varied seam to seam; no boxed cards for lists.
- Every page ends on the close band (a statement and Book a diagnostic call), then the statement footer.

## Controls
- Primary: saffron fill, ink text · 8px radius · 48px tall
- Secondary: outlined in muted, ink text · same radius and height; the nav's action is always the secondary

## Motion
- Character: still. Colour steps on hover, a 1px press, no reveals; under reduced motion everything ends at once.

## Exports
`src/css/tokens.css`, `src/css/base.css`, `src/css/site.css`. The fuller guide for people building pages is `docs/guidelines.md`. Tailwind, DTCG or shadcn blocks are added here on request.
