/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: 
      {
        DancingScript: ['Dancing Script', "cursive"],
        GreatVibes:['Great Vibes', 'cursive'],
        Tangerine:['Tangerine', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}
