import m from 'mithril';
import { isDemoSite, GITHUB_REPO } from './config';

const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}`;
const GITHUB_REPO_URL = `https://github.com/${GITHUB_REPO}`;

export const ForkCount = {
  count: null,

  oncreate() {
    if (!isDemoSite()) return;
    fetch(GITHUB_API)
      .then((r) => r.ok ? r.json() : Promise.reject(new Error(r.statusText)))
      .then((data) => {
        this.count = data.forks_count;
        m.redraw();
      })
      .catch(() => {
        this.count = false;
        m.redraw();
      });
  },

  view() {
    if (!isDemoSite() || this.count === null || this.count === false) return null;
    return m(
      'a.cui-nav-link.fork-count',
      {
        href: GITHUB_REPO_URL,
        target: '_blank',
        rel: 'noopener noreferrer',
        title: 'View repo on GitHub',
      },
      [m('span', { 'aria-hidden': 'true' }, '⎇'), ' ', this.count, ' ', this.count === 1 ? 'fork' : 'forks']
    );
  },
};
