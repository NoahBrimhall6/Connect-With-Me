/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
