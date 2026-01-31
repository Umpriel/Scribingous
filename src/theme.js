const STORAGE_KEY = 'theme';
const THEMES = ['light', 'dark'];

function getStored() {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (THEMES.includes(v)) return v;
  } catch (_) {}
  return null;
}

function prefersDark() {
  return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function getTheme() {
  const stored = getStored();
  if (stored) return stored;
  return prefersDark() ? 'dark' : 'light';
}

export function setTheme(value) {
  const theme = THEMES.includes(value) ? value : getTheme();
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
  }
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (_) {}
  return theme;
}

export function toggleTheme() {
  const next = getTheme() === 'dark' ? 'light' : 'dark';
  return setTheme(next);
}

export function initTheme() {
  setTheme(getTheme());
}
