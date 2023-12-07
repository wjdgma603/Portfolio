module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        black: "#111",
        black100: "#222",
        black200: "#333",
        black300: "#444",
        black400: "#555",
        white: "#fff",
        white100: "#eee",
        white200: "#ddd",
        white300: "#ccc",
        white400: "#bbb",
        blue: "#374999",
        blue100: "#4A6BD6",
        darkmodeWhite: "#aba499",
        darkmodeBlack: "#202324",
        darkmodeGray: "#575e62",
      },
      keyframes: {
        Sbounce: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
      animation: {
        Sbounce: "Sbounce 1s infinite",
      },
    },
  },
  plugins: [],
};
