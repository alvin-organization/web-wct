/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#8d99ae",
        text: "#edf2f4",
        aprimary: "#d90429",
        asecondary: "#ef233c",
        success: "#198754",
        warning: "#ffc107",
        danger: "#dc3545",
      },
      fontFamily: {
        custom: ["Architects Daughter", "cursive"],
      },
    },
  },
  plugins: [],
};
