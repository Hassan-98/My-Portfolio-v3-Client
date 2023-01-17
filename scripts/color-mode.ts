export const setTheme = function (theme: string) {
  if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-bs-theme', theme)
  }

  localStorage.setItem('theme-mode', theme);
}

export default function colorMode() {
  'use strict';

  const storedTheme = window.localStorage.getItem('theme-mode');

  const getPreferredTheme = () => {
    if (storedTheme) return storedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  setTheme(getPreferredTheme())

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value') || 'dark';
          setTheme(theme)
        })
      })
  });
};