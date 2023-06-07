const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['BitterVariable', ...defaultTheme.fontFamily.sans],
      serif: ['Wotfard', ...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        bermuda: {
          50: 'hsl(158, 65%, 97%)',
          100: 'hsl(161, 67%, 89%)', // bg
          200: 'hsl(162, 66%, 78%)',
          300: 'hsl(164, 61%, 65%)',
          400: 'hsl(166, 53%, 50%)',
          500: 'hsl(167, 64%, 40%)',
          600: 'hsl(168, 66%, 32%)',
          700: 'hsl(169, 61%, 26%)',
          800: 'hsl(169, 55%, 22%)',
          900: 'hsl(170, 48%, 19%)',
          950: 'hsl(171, 69%, 10%)',
        },
        mint: {
          50: 'hsl(172, 79%, 96%)',
          100: 'hsl(172, 74%, 92%)',
          200: 'hsl(173, 72%, 82%)',
          300: 'hsl(174, 72%, 69%)', // action
          400: 'hsl(175, 66%, 53%)',
          500: 'hsl(175, 73%, 43%)',
          600: 'hsl(179, 71%, 36%)',
          700: 'hsl(179, 63%, 31%)',
          800: 'hsl(181, 54%, 27%)',
          900: 'hsl(183, 49%, 24%)',
          950: 'hsl(184, 61%, 15%)',
        },
        indigo: {
          800: 'hsl(231, 73%, 22%)',
          900: 'hsl(232, 85%, 15%)',
        },
      },
    },
  },
  plugins: [],
};
