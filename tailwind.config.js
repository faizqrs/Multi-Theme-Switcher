/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["'Pacifico'", "cursive"],
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
}
