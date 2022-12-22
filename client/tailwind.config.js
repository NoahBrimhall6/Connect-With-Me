/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        robotoLight: "RobotoLight",
        robotoReg: "RobotoReg",
        robotoBold: "RobotoBold",
      },
    },
  },
  plugins: [],
}
