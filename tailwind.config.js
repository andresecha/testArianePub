/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =  withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // Colores base
      white: "#ffffff",
      // Rojos
      arianRed: "#cd1211",      // Rojo fuerte
      arianRedLogo: "#c91517",  // Rojo del logo
      // Grises
      arianGrayFooter: "#677b84", // Gris de la barra inferior
      arianGrayBg: "#f2f2f0",    // Gris de fondos
      arianGris: "#808080",
      // Anteriores (mantener para compatibilidad)
      arianBord: "#8F0006",
      arianOrange: "#FF401F",
      arianJaune: "#FFA32E",
    },
    fontFamily: {
      'poiret': ['Poiret One', 'cursive'],
      'jura' : [ 'Jura', 'sans-serif']
    }
  },
  plugins: [],
})