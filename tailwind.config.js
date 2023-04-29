/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

delete colors.lightBlue
delete colors.warmGray
delete colors.trueGray
delete colors.coolGray
delete colors.blueGray

const customColors = {

}

Object.assign(colors, customColors)

module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {},
    colors: colors
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require("daisyui")
  ]
}
