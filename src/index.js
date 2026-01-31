import m from 'mithril';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Post } from './pages/Post';
import { About } from './pages/About';
import { initTheme } from './theme';

initTheme();

m.route.prefix = '#!';

m.route(document.getElementById('app'), '/', {
  '/': {
    render: () => m(Layout, m(Home)),
  },
  '/post/:slug': {
    render: (vnode) => m(Layout, m(Post, { slug: vnode.attrs.slug })),
  },
  '/about': {
    render: () => m(Layout, m(About)),
  },
});

if (window.DEV_MODE) {
  new EventSource('/esbuild').addEventListener('change', () => location.reload());
}
