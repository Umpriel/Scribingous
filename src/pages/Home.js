import m from 'mithril';
import { Card, Grid, Col } from 'construct-ui';
import { posts } from '../data/posts-index';
import { formatDate } from '../utils/formatDate';

export const Home = {
  view: () =>
    m('.page-home', [
      m('h1.page-title', 'Writing'),
      m(
        Grid,
        { gutter: 24 },
        posts.map((post) =>
          m(
            Col,
            { span: 12 },
            m(
              m.route.Link,
              { href: '/post/' + post.slug, class: 'post-card-link' },
              m(
                Card,
                {
                  class: 'post-card',
                  interactive: true,
                  elevation: 1,
                },
                [
                  m('h3.post-card-title', post.title),
                  m('time.post-card-date', { datetime: post.date }, formatDate(post.date)),
                  m('p.post-card-excerpt', post.excerpt),
                  m('span.post-card-more', 'Read more ›'),
                ]
              )
            )
          )
        )
      ),
    ]),
};
