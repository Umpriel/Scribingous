export const DEMO_BASE_URL = 'https://umpriel.github.io/scribingous';
export const GITHUB_REPO = 'umpriel/scribingous';

export function isDemoSite() {
  const base = DEMO_BASE_URL.replace(/\/$/, '');
  const current = (window.location.origin + window.location.pathname).replace(/\/$/, '');
  return current === base || current.startsWith(base + '/');
}
