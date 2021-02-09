module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false,
  theme: {
    extend: {
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
        gray: "#e8e8e8"
      },
      fontFamily: {
        primary: [
          '"action_manregular"',
          "Helvetica Neue",
          "Helvetica-Neue",
          "Arial"
        ],
        secondary: ['"Bangers"']
      },
      fontSize: {
        xxs: ".1rem"
      }
    }
  },
  variants: {
    extend: {}
  }
};
