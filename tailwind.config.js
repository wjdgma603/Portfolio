/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
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
      },
    },
  },
  plugins: [],
};
