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
        background: "#daf2db",
        primary: "#ff9354",
        secondary: "#bff5c1",
        tertiary: "#8ec928",
        textcolor: "#345beb",
        textcolor2: "#000000",
        bordercolor: '#ed422f',
      },
    },
  },
  plugins: [],
  darkMode: "media",
};
