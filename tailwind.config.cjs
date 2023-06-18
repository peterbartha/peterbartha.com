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
    extend: {
      keyframes: {
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
        },
        underline: {
          '0%': { opacity: 0, transform: 'translateX(500%) scaleX(7)' },
          '1%': { opacity: 1 },
          '70%': { transform: 'translateX(0) scaleX(.5)' },
          to: { transform: 'translateX(0) scaleX(1)' },
        },
      },
      animation: {
        reveal: 'reveal .8s cubic-bezier(.22,.61,.36,1) .3s backwards',
        underline: 'underline 1s cubic-bezier(0.25,0.1,0.5,1.27) 0.3s both',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
