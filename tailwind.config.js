/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
      serif: ["Open Sans"],
    },
    extend: {
      fontSize: {
        xxs: "0.625em",
      },
      colors: {
        "gray-light": "#FAFBFC",
        "theme-gray-dark": "#DBDBDB",
        "theme-gray-light": "#F2F2F3",
        "theme-text": "#223043",
      },
    },
  },
  plugins: [],
};
