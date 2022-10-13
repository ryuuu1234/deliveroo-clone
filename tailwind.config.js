/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'App.{html,js,jsx,ts,tsx}',
    'Icon.{html,js,jsx,ts,tsx}',
    './screens/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './src/layouts/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
