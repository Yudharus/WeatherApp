/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue--primary": "#3B72B9",
        "primary": "#F6F7F9",
        "white": "#FFF",
        "white2" : "#f5f5f5",
        "transparent1": "#204D87",
        "transparent2": "#638ABD",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        tablet: "1280px",
      },
    },
  },
  plugins: [],
};
