# passarel·la: design and content guidelines

For anyone adding or changing a page. `design.md` at the root is the short locked system; this file explains how to apply it. Values are never written in a page: they live in `src/css/tokens.css`, and every component reads them.

## 1. Type

| Role | Face | Weight | Where it is set |
| --- | --- | --- | --- |
| Headings, figures, wordmark, statements | Fraunces | 500 only | `--font-display`, `--display-weight` |
| Body, labels, nav, captions | Inter | 400 | `--font-body` |
| Buttons, the first cell of a table row | Inter | 600 | `.btn`, `.table td:first-child` |

- Never italic, never bold Fraunces, never a third family.
- Sizes come from the scale in `tokens.css`: `--text-display` (page headline, about 84px), `--text-section` (section head, about 52px), `--text-title` (item title), `--text-lead` (the one line under a head), `--text-md` (body, 16px), `--text-sm` (labels and captions).
- A heading is one weight and one colour. Stress comes from a line break, or a second line at a second size (see the Before, During and After panels on the home page), never a coloured phrase.
- Labels, table heads, captions and nav are sentence case, untracked. No small capitals above headings.
- Fonts currently load from Google Fonts. Before launch, self-host the two families: put the files in `src/fonts/`, add `@font-face` rules to `tokens.css`, and drop the Google `<link>` from `src/_includes/layouts/base.njk`. It's faster, and no visitor data goes to Google.

## 2. Colour

| Token | Use |
| --- | --- |
| `--color-paper` | the page |
| `--color-paper-2` | bands: offers, the close, the banner |
| `--color-paper-3` | hover on rows |
| `--color-ink` / `--color-ink-2` | headings / body text |
| `--color-muted` | labels, captions, field borders |
| `--color-rule` / `--color-rule-soft` | hairlines |
| `--color-accent` (saffron) | the signal: primary button, figures, focus ring, link underline, the dot in the mark |
| `--color-accent-ink` | text on saffron |

Saffron stays under about 5% of any screen. It is never a background band, never a phrase in a heading, never placeholder text.

## 3. The mark and wordmark

- The bridge mark is `src/_includes/partials/mark.njk`: two posts, a deck and a sagging cable, with the saffron dot at the centre. Its strokes use `currentColor` (`--color-mark`); only the dot is saffron.
- Smallest use: 32px. Keep clear space of a quarter of its width around it.
- The wordmark is "passarel·la" in Fraunces 500, all lower case, with the middle dot in saffron. The middle dot belongs to the name; it is never used as a separator anywhere else.

## 4. Components

Each one is in `src/css/site.css` and shown on a live page.

| Component | Class | Use it for | See |
| --- | --- | --- | --- |
| Primary button | `.btn` | the one action on a screen, usually Book a diagnostic call | every page |
| Secondary button | `.btn .btn--quiet` | the second action, and the nav's action | home hero |
| Register | `.register` + `.table--register` | the diagnostic's deliverable, as a sample | home, diagnostic |
| Pinned stack | `.stack`, `.panels` | a sequence the visitor scrolls through | home: the crossing |
| Rows | `.rows` + `.row` | three to five named items with a line each | home: offers; funds |
| Index | `.index` + `caseRow` macro | engagements, figure first | home, work |
| Figures | `.figures` | real numbers only, each with what it counts | home, funds, case study |
| Facts strip | `.facts` | terms: duration, price, access | diagnostic, funds |
| Numbered | `.numbered` | a real sequence or set (dimensions, deliverables) | diagnostic |
| Timeline | `.timeline` | a career or a history | about |
| Close band | front matter `close:` | every page's ending | all but home |

Lists are never boxed cards. Sections part by space, a hairline or a band, varied seam to seam.

## 5. Copy

- A page headline is seven words or fewer, and one sentence of twelve words or fewer sits under it.
- Section heads say what the visitor will see. Prefer the page's own nouns ("Five dimensions", "The silent-failure register") to category labels ("Our approach").
- No middle dots joining phrases, no arrows on links, no em dashes. Use commas, line breaks or two columns.
- Figures appear only when they're true and you can share them. Client figures need the client's permission.
- Unknown facts are a dashed slot (`<span class="fill" data-fill="name">…</span>`), never an invented value. At most two per page.
- A link goes somewhere new. Something without its own page is plain text, never a link back to the page it sits on.

## 6. Adding things

- **A note:** add `src/notes/<slug>.md` with `layout: layouts/note.njk`, `permalink: /notes/<slug>/`, `title`, `description`, `lead`, `author`, `date`, `published` (the date as readers see it), and `close`. It appears on the work page automatically. Delete its title from `src/_data/plannedNotes.json`.
- **A case study:** add `src/work/<slug>.njk` (copy `agentic-delivery-engine.njk`) and set that entry's `url` in `src/_data/work.json`. The row becomes a link on the home and work pages.
- **A page:** a `.njk` file in `src/` with `layout: layouts/base.njk`, `title`, `description`, `permalink` and `close`. Add it to `site.nav` in `src/_data/site.json` if it belongs in the top menu. The footer has no menu.
- **Contact details, LinkedIn, the calendar link:** `src/_data/site.json`. Setting `calendar` or `linkedin` turns the placeholder into a link everywhere.

## 7. Checking a change

Run `npm start` and look at the page at 1440px and 375px wide. Check:
- the headline, its sentence and the button fit the first screen at 1280 x 800;
- nothing scrolls sideways on a phone;
- every control shows a saffron focus ring from the keyboard.
