/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
      backgroundImage: {
        'home-header-bg': "url('./assets/church bg.jpg')",
      },
      boxShadow: {
        '3xl': '0 10px 65px -15px rgba(0, 0, 0)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
