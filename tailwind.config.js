/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#121c21",
        white: "#fff",
        gray: "#d2d2d2",
        red: "#FF7676",
        accent: "#71aeff",
        accent_secondary: "#71c8ff",
        black_100: "#242d33",
        black_200: "#303c40",
        border: "#485a61",
      },
    },
  },
  plugins: [],
};
