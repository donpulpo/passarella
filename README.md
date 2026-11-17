# passarel·la website

The site for passarel·la, the bridge to AI-native. Built with [Eleventy](https://www.11ty.dev/) and deployed to GitHub Pages.

## Run it

```bash
npm install
npm start        # http://localhost:8080, reloads on save
npm run build    # writes the site to _site/
```

## Where things are

```
src/
  _data/site.json          contact details, nav, banner, footer
  _data/work.json          engagements (home and work pages)
  _data/plannedNotes.json  notes not written yet
  _includes/layouts/       base.njk (head, header, footer, close), note.njk
  _includes/partials/      the mark, the close band, macros
  _includes/scripts/       small page scripts (menu, form, stage marker)
  css/tokens.css           every colour, face and size
  css/base.css, site.css   base rules and components
  notes/*.md               notes, in Markdown
  work/*.njk               case studies
  *.njk                    pages
design.md                  the locked design system
docs/guidelines.md         how to apply it: type, colour, logo, components, copy
```

## Deploy

Every push to `main` builds and deploys through `.github/workflows/deploy.yml`. The first time, set the repository's **Settings → Pages → Source** to **GitHub Actions**. Without a custom domain the site is served at `https://donpulpo.github.io/passarella/`; links are prefixed automatically. Once `passarel.la` points at Pages, the prefix drops away by itself.

## Still to fill in before launch

- The calendar link and the LinkedIn URL, in `src/_data/site.json`.
- The contact form's service. Put its URL in `data-endpoint` in `src/contact.njk`; until then the form says nothing was sent.
- Company registration, professional indemnity (about page) and the funds price.
- The note's date and its two draft paragraphs.
- Client permission for the case-study figures.
- Self-hosted fonts (`docs/guidelines.md` § 1).

The original Claude Design export (the canvas files and the static first version) stays outside this repo as the design source.
