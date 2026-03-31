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
        sans: ['Lato', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        background: 'rgb(var(--bg) / <alpha-value>)',
        panel: 'rgb(var(--panel) / <alpha-value>)',
        panelRaised: 'rgb(var(--panel-raised) / <alpha-value>)',
        border: 'rgb(var(--border) / calc(var(--border-strength) * <alpha-value>))',
        foreground: 'rgb(var(--text) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accentStrong: 'rgb(var(--accent-strong) / <alpha-value>)',
        primary: 'rgb(var(--accent) / <alpha-value>)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        'soft-lg': 'var(--shadow-soft-lg)',
      },
      borderRadius: {
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
    },
  },
  plugins: [],
}
