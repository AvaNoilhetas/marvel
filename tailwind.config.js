module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1280px",
        xl: "1280px"
      },
      padding: {
        sm: "2rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "6rem",
        DEFAULT: "1rem"
      }
    },
    colors: {
      dark: "#434646",
      red: "#e94822"
    },
    fontFamily: {
      primary: [
        '"action_manregular"',
        "Helvetica Neue",
        "Helvetica-Neue",
        "Arial"
      ],
      secondary: ['"Bangers"']
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
