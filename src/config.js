export const DEMO_BASE_URL = 'https://umpriel.github.io/Scribingous';
export const GITHUB_REPO = 'umpriel/Scribingous';

export function isDemoSite() {
  const base = DEMO_BASE_URL.replace(/\/$/, '');
  const current = (window.location.origin + window.location.pathname).replace(/\/$/, '');
  return current === base || current.startsWith(base + '/');
}
