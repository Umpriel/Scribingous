import m from 'mithril';
import { Card, Button, Icons } from 'construct-ui';
import { getPostBySlug } from '../data/posts-index';
import { parseMarkdown } from '../markdown';
import { HighlightCode } from '../HighlightCode';
import { formatDate } from '../utils/formatDate';

export const Post = {
  view: (vnode) => {
    const slug = vnode.attrs.slug;
    const post = getPostBySlug(slug);
    if (!post) {
      return m('.page-post', [
        m('h1', 'Not found'),
        m('p', "This post doesn't exist."),
        m(Button, {
          label: 'Back to home',
          iconLeft: Icons.ARROW_LEFT,
          onclick: () => m.route.set('/'),
        }),
      ]);
    }
    return m('.page-post', [
      m(Button, {
        label: 'Back',
        iconLeft: Icons.ARROW_LEFT,
        basic: true,
        class: 'back-link',
        onclick: () => m.route.set('/'),
      }),
      m('article.post-article', [
        m('header.post-header', [
          m('h1.post-title', post.title),
          m('time.post-date', { datetime: post.date }, formatDate(post.date)),
        ]),
        m(Card, { class: 'post-body', elevation: 0 }, m(HighlightCode, m.trust(parseMarkdown(post.body)))),
      ]),
    ]);
  },
};
