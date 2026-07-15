/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        'text-base': 'var(--color-text)',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-text)',
            a: {
              color: 'var(--color-accent)',
              '&:hover': { color: 'var(--color-primary)' },
            },
            h2: { color: 'var(--color-primary)' },
            h3: { color: 'var(--color-primary)' },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
