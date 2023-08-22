/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fcd34d",

          secondary: "#6ae8be",

          accent: "#dd4692",

          neutral: "#1F1C26",

          "base-100": "#ECECEE",

          info: "#6EAEF7",

          success: "#117338",

          warning: "#F8AC3A",

          error: "#EB1418",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
