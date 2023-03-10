/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "header-button": "0px 9px 52px #301E44",
      },
      backgroundImage: {
        "header-image": "url('./assets/images/headerbg.svg')",
      },
    },
  },
  plugins: [],
};
