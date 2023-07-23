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
      zinc: colors.zinc,
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
        bubble: {
          '0%': { opacity: 0, transform: 'scale(0.96) translateY(24px)' },
        },
        underline: {
          '0%': { opacity: 0, transform: 'translateX(500%) scaleX(5)' },
          '1%': { opacity: 1 },
          '70%': { transform: 'translateX(0) scaleX(.5)' },
          to: { transform: 'translateX(0) scaleX(1)' },
        },
        'underline-centered': {
          '0%': { opacity: 0, transform: 'translateX(-50%) scaleX(5)' },
          '1%': { opacity: 1 },
          '70%': { transform: 'translateX(-50%) scaleX(.5)' },
          to: { transform: 'translateX(-50%) scaleX(1)' },
        },
        swish: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '50%': { opacity: 1 },
          to: { opacity: 0, transform: 'translateX(calc(400px - 100%))' },
        },
        wobble: {
          '0%': { transform: 'rotate(0deg) translateX(-5px) translateY(-5px)' },
          '20%': { transform: 'rotate(5deg) scale(1.1)' },
          '50%': { transform: 'translateX(5px) translateY(-5px)' },
          '70%': { transform: 'rotate(-5deg) scale(0.9)' },
          '100%': { transform: 'rotate(0deg) translateX(2.5px) translateY(5px)' },
        },
      },
      animation: {
        reveal: 'reveal .8s cubic-bezier(.22,.61,.36,1) .3s backwards',
        bubble: 'bubble .8s cubic-bezier(.16,1,.3,1) .3s backwards',
        underline: 'underline 1s cubic-bezier(0.25,0.1,0.5,1.27) 0.3s both',
        'underline-centered': 'underline-centered 1s cubic-bezier(0.25,0.1,0.5,1.27) 0.3s both',
        swish: 'swish 3s ease-in-out infinite',
        wobble: 'wobble 5s infinite alternate',
        'wobble-reverse': 'wobble 5s infinite alternate-reverse',
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
