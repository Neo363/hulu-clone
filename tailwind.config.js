module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins']
      },
      screens: {
        "3xl" : "2000px",
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
