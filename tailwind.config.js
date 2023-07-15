/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#5f370c" ,
          secondary: "#f9e6d2",
          accent: "#492a09",
          text: "#120a02",
          bg: "#fae9d6",
        }
      }
    },
  },
  plugins: [],
}

