/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'primary-light': '#ffffff',
        'secondary-light': '#a0dede',
        'action-light': '#476561',
        'border-light': '#191919',
        'light-gray': '#d5d5d6',
        'primary-dark': '#011e11',
        'secondary-dark': '#154b1f',
        'action-dark': '#ae6538',
        'border-dark': '#476561',
        'heart-red': '#d52f27'
      },
      fontFamily: {
        'light-font': ['Raleway', 'sans-serif'],
        'dark-font-primary': ['DM Sans', 'sans-serif'],
        'dark-font-secondary': ['Vollkorn SC', 'serif']
      },
    },
  },
  plugins: [],
}

