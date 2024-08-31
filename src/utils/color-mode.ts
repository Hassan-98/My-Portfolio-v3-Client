import Cookies from 'universal-cookie';

export const setTheme = function (theme: string) {
  const cookies = new Cookies();

  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  cookies.set('portfolio-theme-mode', theme, { path: '/' });
}

export default function colorMode() {
  'use strict';

  setTheme(getPreferredTheme());
};

export const getPreferredTheme = () => {
  const cookies = new Cookies();
  const storedTheme = cookies.get('portfolio-theme-mode');

  if (storedTheme) return storedTheme;

  const isDarkDefault = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
  return isDarkDefault ? 'dark' : 'light'
}