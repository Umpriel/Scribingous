# Scribingous

Scribingous is a super lightweight, highly opinionated **site template** for blogs and small static sites. Fork it, add your content, and ship.

It’s built with [Mithril](https://mithril.js.org) and [Construct UI](https://vrimar.github.io/construct-ui): no framework lock-in, no build-time JSX. Posts and the About page are Markdown; code blocks get syntax highlighting. One stack, one way.

**Features:** client-side routing, dark/light theme (system preference + toggle), markdown-rendered posts and About, highlight.js for code, static build with esbuild.

**Requires:** [Bun](https://bun.sh) (v1.0.0+).

## Quick start

```bash
# Clone or fork this repo, then:
cd <repo-name>
bun install
bun run dev
```

Open http://localhost:8091. To build for production:

```bash
bun run build
```

To run the built site locally:

```bash
bun run preview
```

Then open http://localhost:8091. For deployment, serve the `public/` folder with any static host (e.g. GitHub Pages, Netlify, Cloudflare Pages).

## Project structure

| Path | Purpose |
|------|---------|
| `src/data/posts/` | One file per post; each exports `{ slug, title, date, excerpt, body }`. |
| `src/data/posts-index.js` | Imports all post modules, sorts by date (newest first), exports `posts` and `getPostBySlug(slug)`. |
| `src/data/about.js` | Markdown string for the About page. |
| `src/pages/` | Home, Post, About views. |
| `public/` | Static assets; `index.html`, CSS, and built `app.js` after `bun run build`. |

## Adding a post

1. Create a file in `src/data/posts/`, e.g. `my-post.js`:

```js
export default {
  slug: 'my-post',
  title: 'My post',
  date: '2025-02-01',
  excerpt: 'A short summary.',
  body: `
Your post content in **Markdown**. Code blocks get syntax highlighting.
\`\`\`js
console.log('Hello');
\`\`\`
`.trim(),
};
```

2. In `src/data/posts-index.js`, add the import and include it in the `postList` array:

```js
import welcome from './posts/welcome.js';
import myPost from './posts/my-post.js';

const postList = [welcome, myPost];
```

Posts are automatically sorted by `date` (newest first) on the home page.

## Editing the About page

Edit the markdown string in `src/data/about.js`. Same markdown and code-highlighting pipeline as posts.

## Customizing

- **Site name and nav:** `src/Layout.js` (brand text “Scribingous”, nav links).
- **Demo-site fork count:** The navbar shows a GitHub fork count only when the app is served from the official demo URL. Configure `DEMO_BASE_URL` and `GITHUB_REPO` in `src/config.js`; forks and local runs do not show it.
- **Document title:** `<title>` in `public/index.html`.
- **Theme:** CSS variables in `public/theme.css` (derived from Apple Human Interface Guidelines); dark/light toggle in the header.
- **Syntax highlighting:** `public/hljs-theme.css` (based on highlight.js GitHub style; edit or replace for another theme).

## Tech stack

- [Bun](https://bun.sh) – runtime and package manager
- [Mithril](https://mithril.js.org) – routing and views
- [Construct UI](https://vrimar.github.io/construct-ui) – header, cards, buttons, grid
- [marked](https://marked.js.org) – markdown to HTML
- [highlight.js](https://highlightjs.org) – code block highlighting
- [esbuild](https://esbuild.github.io) – bundle and dev server

## License

MIT. See [LICENSE](LICENSE).
