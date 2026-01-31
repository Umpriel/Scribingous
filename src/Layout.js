import m from 'mithril';
import { ThemeToggle } from './ThemeToggle';
import { ForkCount } from './ForkCount';

export const Layout = {
  view(vnode) {
    const currentRoute = m.route.get();
    return m('.layout', [
      m('header.cui-header', [
        m('.cui-header-inner', [
          m(m.route.Link, { href: '/', class: 'cui-brand' }, 'Scribingous'),
          m('nav.cui-nav', [
            m(m.route.Link, { href: '/', class: 'cui-nav-link' + (currentRoute === '/' ? ' active' : '') }, 'Home'),
            m(m.route.Link, { href: '/about', class: 'cui-nav-link' + (currentRoute === '/about' ? ' active' : '') }, 'About'),
            m(ForkCount),
          ]),
          m('div.cui-header-actions', [
            m(ThemeToggle),
          ]),
        ]),
      ]),
      m('main.cui-main', vnode.children),
      m('footer.cui-footer', [
        m('p', '© ' + new Date().getFullYear()),
      ]),
    ]);
  },
};
