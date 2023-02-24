/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
        colors: {
            'color-100': '#FFA3FD',
            'color-200': '#E384FF',
            'color-300': '#E384FF',
            'color-400': '#635985',
            'color-500': '#191825'
        }
    },
},
plugins: [],
}