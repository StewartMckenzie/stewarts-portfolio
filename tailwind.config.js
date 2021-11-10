module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        DMPrimary: "#0f0f10",
        LMPrimary: "",
        DMSecondary: "#03a07b",
        LMSecondary: "",
        DMText: "#f4f2f3",
        LMText: "",
        DMTextHover: "",
        LMTextHover: "",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
