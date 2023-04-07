/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#fff',
      'primary': '#00040f',
      'dark': '#09977C1A',
      'border':'#3F3E45',
      'bgFooter':' #0B0A0C99',
      secondary: '#00f6ff',
      lightWhite: 'rgba(255,255,255,0.7)',
      lightBlue: 'rgba(9,151, 124, 0.1)',
    },
    fontFamily: {
      montserrat: ['Montserrat', "sans-serif"],
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  plugins: [],
}