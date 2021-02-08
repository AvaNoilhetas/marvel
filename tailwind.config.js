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
        xl: "1400px"
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
      primaryRed: "#EC1D25",
      red: "#E94822",
      white: "#FFFFFF",
      yellow: "#ffce55",
      lightBg: "#e8e8e8"
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
  }
};
