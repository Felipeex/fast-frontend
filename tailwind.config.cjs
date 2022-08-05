/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        green: {
          700: "#28D159",
          600: "#51C773",
        },

        blue: {
          800: "#00AAEC",
          700: "#404EFB",
          600: "#3841B4",
        },

        black: {
          700: "#000000",
          600: "#131416",
        },

        gray: {
          600: "#777E8B",
          100: "#F9F9FA",
        },
      },
      screens: {
        lg: { min: "1150px" },
        md: { min: "1000px" },
        sm: { min: "680px" },
        xl: { min: "535px" },
      },
    },
  },
  plugins: [],
};
