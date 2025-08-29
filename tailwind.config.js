/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'fullhd': '1920px',
        '2k': '2560px',
        '4k': '3840px',
      }
    },
    plugins: [],
  }
}
