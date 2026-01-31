export default {
  slug: 'welcome',
  title: 'Welcome',
  date: '2026-01-31',
  excerpt: 'A quick tour of Scribingous: markdown, code highlighting, and how to add your own posts.',
  body: `
**Scribingous** is a super lightweight, highly opinionated static writing site. You get Markdown posts, syntax-highlighted code blocks, and a dark/light theme.

## What you get

- **Posts** – One file per post in \`src/data/posts/\`. Each file exports \`slug\`, \`title\`, \`date\`, \`excerpt\`, and \`body\` (markdown). Register new posts in \`posts-index.js\`; they’re sorted by date (newest first).
- **About page** – Edit the markdown in \`src/data/about.js\`. Same pipeline as posts.
- **Theme** – Toggle in the header; preference is stored and respects \`prefers-color-scheme\` on first visit.

## Code in posts

Fenced code blocks are highlighted. For example:

\`\`\`js
import { posts } from '../data/posts-index';

posts.forEach((p) => {
  console.log(p.title, p.date);
});
\`\`\`

Use the language tag (\`js\`, \`rust\`, \`html\`, etc.) so highlight.js picks the right grammar.

## Next steps

1. **Fork** the repo and clone it.
2. **Add a post** – create \`src/data/posts/your-slug.js\` and add it to the \`postList\` in \`posts-index.js\`.
3. **Edit About** – change \`src/data/about.js\`.
4. **Customize** – site name in \`Layout.js\`, title in \`index.html\`, theme variables in \`public/theme.css\`.

Full details are in the README. Have fun.
`.trim(),
};
