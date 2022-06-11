module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        red: {
          primary: "#ef476f",
          light: {
            100: "#fa5a83",
            200: "#fb91ac",
          },
          dark: {
            100: "#af0631",
            200: "#830425",
          },
        },
        yellow: {
          primary: "#ffd166",
          light: {
            100: "#ffda85",
            200: "#ffe3a3",
          },
          dark: {
            100: "#ffbc1f",
            200: "#d69600",
          },
        },
        green: {
          primary: "#06d6a0",
          light: {
            100: "#1df9c0",
            200: "#56fad0",
          },
          dark: {
            100: "#05ab80",
            200: "#048060",
          },
        },
        blue: {
          primary: "#118ab2",
          light: {
            100: "#19b5e9",
            200: "#52c8ef",
          },
          dark: {
            100: "#0e6e8e",
            200: "#0a536b",
          },
        },
        secondary: {
          primary: "#073b4c",
          light: {
            100: "#0e789a",
            200: "#15b4e8",
          },
          dark: {
            100: "#062f3d",
            200: "#04232e",
          },
        },
      },
    },
  },
  plugins: [],
};
