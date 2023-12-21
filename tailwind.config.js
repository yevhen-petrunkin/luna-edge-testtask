/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // MEDIA QUERIES
    screens: {
      xs: "480px",
      sm: "640px",
      base: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          xs: "16px",
          sm: "20px",
          base: "24px",
          lg: "28px",
          xl: "32px",
        },
      },

      // COLORS

      colors: {
        primary: {
          DEFAULT: "#18171D",
          dark: "#444347",
          darker: "#9492A0",
          mid: "#A09FAC",
          lighter: "#D7D6DD",
          light: "#DDDCE0",
        },

        secondary: {
          DEFAULT: "#FFFFFF",
          darker: "#F4F4F6",
          lighter: "#F9F9FA",
        },

        error: {
          DEFAULT: "#F87070",
          lighter: "#F9797B",
        },

        accent: {
          DEFAULT: "#4724C7",
          dark: "#4724C7",
          darker: "#6466F1",
          mid: "#6466F1",
          lighter: "#C6D2FE",
          light: "#EEF2FF",
        },
      },
    },
  },
  plugins: [],
};
