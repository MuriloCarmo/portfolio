// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        background: '#ffffff',
        foreground: '#0f0f0f',
        primary: '#6366F1',
        gradientStart: '#ec4899',
        gradientMid: '#8b5cf6',
        gradientEnd: '#06b6d4',
        dark: {
          background: '#0d0d0d',
          foreground: '#f4f4f5',
        },
      },
    },
  },
  plugins: [],
}
