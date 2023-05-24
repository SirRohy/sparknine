/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#d48e3d",
        primary: "#ff9354",
        secondary: "#f0ce46",
        tertiary: "#8ec928",
        textcolor: "#46aef0",
        bordercolor: '#ed422f',
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
