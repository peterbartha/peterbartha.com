const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['BitterVariable', ...defaultTheme.fontFamily.sans],
      serif: ['Wotfard', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      'white-ice': 'hsl(var(--color-white-ice) / <alpha-value>)',
      bermuda: 'hsl(var(--color-bermuda) / <alpha-value>)',
      mint: 'hsl(var(--color-mint) / <alpha-value>)',
      indigo: {
        800: 'hsl(var(--color-indigo) / <alpha-value>)',
        900: 'hsl(var(--color-indigo-darker) / <alpha-value>)',
      },
    },
    extend: {},
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
