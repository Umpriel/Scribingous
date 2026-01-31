import m from 'mithril';
import hljs from 'highlight.js';

export const HighlightCode = {
  oncreate(vnode) {
    vnode.dom.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  },
  onupdate(vnode) {
    vnode.dom.querySelectorAll('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
  },
  view(vnode) {
    return m('.post-body-content', vnode.children);
  },
};
