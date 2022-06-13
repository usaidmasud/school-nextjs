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
        p01: {
          "prussian-blue": {
            100: "#023047",
            200: "#022C41",
            300: "#02283C",
            400: "#012537",
            500: "#012232",
          },
          "corn-flower": {
            100: "#8ECAE6",
            200: "#78C0E1",
            300: "#62B6DD",
            400: "#4EB1D8",
            500: "#3EACD3",
          },
          "blue-green": {
            100: "#219EBC",
            200: "#1F91AD",
            300: "#1C85A0",
            400: "#1A7A92",
            500: "#156085",
          },
          "selective-yellow": {
            100: "#FFB703",
            200: "#F2AD00",
            300: "#DFA000",
            400: "#CC9200",
            500: "#BA8500",
          },
          tangerine: {
            100: "#FB8500",
            200: "#E87C00",
            300: "#D67200",
            400: "#C46900",
            500: "#B35F00",
          },
        },
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
