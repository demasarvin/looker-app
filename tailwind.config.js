/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
        secondary: ["Schibsted Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#111111",
      },
    },
  },
  plugins: [],
};
