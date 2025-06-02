/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          grayishBlue: "hsl(237, 18%, 59%)",
          softRed: "hsl(345, 95%, 68%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          darkDesaturatedBlue: "hsl(236, 21%, 26%)",
          veryDarkBlue: "hsl(235, 16%, 14%)",
          veryDarkAlmostBlackBlue: "hsl(234, 17%, 12%)",
        },
      },
      fontFamily: {
        redhat: ['"Red Hat Text"', "sans-serif"],
      },
      fontSize: {
        base: "16px",
      },
    },
  },
  plugins: [],
};
