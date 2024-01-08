/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005F60",
        primary2: "#008080",
        primary3: "#43B4B3",
        primary4: "#CCF1D2",
        secondary: "#EDA600",
        turquoise: "#CE414A",
        yellowish: "#F79963",
      },
    },
  },
  plugins: [],
};
