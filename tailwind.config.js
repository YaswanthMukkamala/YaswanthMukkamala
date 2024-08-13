/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#e1e5ec",
        black: "#000",
        whitesmoke: "#f2f2f2",
        cornflowerblue: "#0070c0",
        mediumorchid: "#9d44c0",
        honeydew: "#f2f9ee",
      },
      spacing: {},
      fontFamily: {
        "fira-sans": "'Fira Sans'",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      "3xs": "10px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
