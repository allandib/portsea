---
# The brand as values. `npm run brand` turns this block into
# src/styles/brand.css and src/data/brand.ts (both generated, never edited).
# The sections below the block explain each value and how to change it.
colors:
  paper: "#faf8f3"       # the page ground: warm limestone off-white
  surface: "#f1ede4"     # cards, panels and alternate bands: sand
  ink: "#151413"         # headings and body text
  muted: "#5c574f"       # secondary text
  line: "#e2dcd0"        # rules and borders
  accent: "#111111"      # buttons, marks, focus rings: the plate's black
  accent-ink: "#7e6631"  # labels and links: the postcard's gold, darkened to read on paper
  inverse:               # the black band, white on black like the plate itself
    paper: "#0f0f0f"
    surface: "#1a1918"
    ink: "#f6f3ec"
    muted: "#b9b3a8"
    line: "#2f2d2a"
    accent: "#f6f3ec"     # a button on the black band is cream, with black words
    accent-ink: "#9e803d" # the postcard's gold, which reads on black as it is
fonts:
  display:
    family: Poppins
    fallback: ui-sans-serif, system-ui, sans-serif
    import: "@fontsource/poppins/600.css"
  body:
    family: Poppins
    fallback: ui-sans-serif, system-ui, sans-serif
    import:
      - "@fontsource/poppins/400.css"
      - "@fontsource/poppins/500.css"
      - "@fontsource/poppins/600.css"
      - "@fontsource/poppins/700.css"
logo:
  light: null            # the header shows the site name, Portsea 3944, in the display face
  dark: null
  width: 140
  height: 28
icons:
  svg: /brand/favicon.svg
  png32: /brand/icon-32.png
  png192: /brand/icon-192.png
  apple: /brand/icon-180.png
share: /brand/share.png  # 1200×630, shown when a page is shared
---

# Brand

The brand of this site, as values at the top and as words below. The values are
the source: `npm run brand` writes them into the stylesheet and the components,
and the build fails when a value is missing or text would be unreadable.

## Where the values came from

The site is the landing page for the owner's direct-mail postcard to postcode
3944 (its QR code points here), so the brand follows the postcard, built in
November 2026 (`portsea_3944_postcard_now.pdf`, from the owner's handover),
and the plate itself.

- **Black** (`accent`, and the inverse band's `paper`) is the plate's enamel
  and the postcard's band, `#111111` on screen. Buttons are black, like both.
- **Gold** is the postcard's kicker and "3944 · PORTSEA" line, `#9e803d`. It
  reads on black (5.1:1), so the black band uses it as is. On the light ground
  it does not (3.5:1), so `accent-ink` is the same gold darkened to `#7e6631`
  (5.2:1).
- **The light ground** (`paper`, `surface`, `line`) is a warm off-white and
  sand, after Portsea's limestone cliffs, rather than the card's pure white,
  so the plate's white numerals stay the brightest thing in the photographs.
- **Type** is the postcard's: Poppins (open font, OFL), self-hosted, 600 for
  headings and 400 to 700 for the rest.

## Colour

Seven roles. Components only ever name a role, never a colour, so a new brand
is a new set of values here and nothing else.

| Role | Used for | Rule |
| --- | --- | --- |
| `paper` | the page ground | |
| `surface` | cards, panels, alternate bands | a step away from paper, same family |
| `ink` | headings and body text | 4.5:1 or better on paper |
| `muted` | secondary text, captions, the underline of text links | 4.5:1 or better on paper |
| `line` | rules and borders | visible on paper and on surface |
| `accent` | buttons, marks, underlines, focus rings | the brand's main colour |
| `accent-ink` | the accent as text (links, labels) | 4.5:1 or better on paper; darken the accent until it passes |

An optional `inverse` set (`paper`, `surface`, `ink`, `muted`, `line`, and
`accent` or `accent-ink` when the main ones do not read on it) gives one band
the other ground, a light band on a dark site or the reverse. Sections of the
home page take it by being wrapped in `<Band>` (`src/components/Band.astro`);
its text roles must read on its paper too.

Dark mode is off. A brand that needs it adds a second set of values in a
`@media (prefers-color-scheme: dark)` block in `src/styles/global.css`.

## Type

Two roles: `display` for headings and `body` for everything else. Each names a
family, a fallback stack and a source, one of:

- `import`: a stylesheet from an installed package, self-hosted at build time.
  Open fonts come as `@fontsource-variable/<name>` or `@fontsource/<name>`,
  added with `npm install --save-dev --save-exact`. No font request leaves the
  site at run time.
- `faces`: font files the business already owns, copied into `public/fonts/`,
  each with its `file`, `weight` and `style`. The licence is the business's
  own; note it under "Where the values came from".
- `system: true`: nothing is loaded; the fallback stack is the font.

A commercial font served by a font service (Adobe Fonts, fonts.com, MyFonts)
is tied to the domains on that account and will not load here, so use the
nearest open lookalike and say so under "Where the values came from".

Headings use the display face at the weight and letter spacing set at the top
of `src/styles/global.css` (`--display-weight`, `--display-tracking`). A
display face that comes in one weight only needs the weight set to the one it
has, usually 400, and the spacing to 0; otherwise the browser fakes a bold.

## Logo, icons and share image

`logo.light` sits on paper and `logo.dark` on dark grounds, both with the size
they render at in the header. With no logo the header shows the site name in
the display face. Icons: the SVG favicon, 32 and 192 pixel PNGs and the 180
pixel Apple touch icon, all in `public/brand/`. `share` is the 1200×630 image
shown when a page is shared.

## Imagery

The owner's own photographs of the plate, from his Facebook post of October
2026, in `src/assets/`: the plate in its presentation case with the book and
the certificate (`plate-in-case.jpg`, 1290 px wide), and close-ups of the
certificate and the book (`certificate.jpg`, `book.jpg`, 640 px). They were
cut from a phone screenshot, so they are as sharp as they will get; the
original photos, when the owner has them, replace them at full size. Don't use
other people's photographs of plates or of Portsea.

The favicon is a white P on a black rounded square. The share image follows
the postcard's front: the plate photograph over a black band with "The only
piece of Portsea no agent can sell you." and "3944 · PORTSEA" in gold.

## Changing the brand

1. Edit the values at the top of this file.
2. `npm run brand`, which also runs before every build. It prints each colour
   with its contrast on paper and stops on any problem.
3. `npm run check`. `tests/brand.test.mjs` fails the build when a role is
   missing, text is under 4.5:1 on paper, a font has no source, a brand file
   is absent, a component names a colour or font directly, or an inverse set
   does not read.
