import welcome from './posts/welcome.js';

// Add new posts here after creating them in the /posts directory
// and importing.
const postList = [
  welcome,
];

export const posts = [...postList].sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}
