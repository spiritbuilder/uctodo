module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xxs: "0.65rem",
      },
      spacing: {
        4.5: "18px",
        300: "330px",
        3: "3px",
      },
      screens: {
        xs: { max: "350px" },
      },
      colors: {
        pirp: "#8F83DA",
        grin: "#86DA83",
        blk: "#5B5B5B",
        tomat: "#CC634F",
        border: "#DEDEDE",
        divider: "#EFEFEF",
        bgblack: "#F9F9F9",
        ucblue: "#6085D8",
        stbg: "#F2F4F9",
      },
    },
  },
  plugins: [],
};
