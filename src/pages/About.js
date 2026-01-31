import m from 'mithril';
import { Card } from 'construct-ui';
import { aboutBody } from '../data/about';
import { parseMarkdown } from '../markdown';
import { HighlightCode } from '../HighlightCode';

export const About = {
  view: () =>
    m('.page-about', [
      m('h1.page-title', 'About'),
      m(
        Card,
        { class: 'about-card post-body', elevation: 1 },
        m(HighlightCode, m.trust(parseMarkdown(aboutBody)))
      ),
    ]),
};
