/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        firstprimary: '#292929',
        secondprimary: '#A5BF13',
        thirdprimary: '#F0F0F0',
        forthprimary: '#62929E',
      },
      boxShadow: {
        neo: '-10px 10px 29px #bebebe, 10px -10px 29px #ffffff',
        teo: '-5px 5px 15px #bebebe,5px -5px 15px #ffffff',
      },
      fontFamily: {
        DMsans: ['DM Sans', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        bowldyOneSC: ['Bowlby One SC', 'sans-serif'],
        alata: ['Alata', 'sans-serif'],
        poiretOne: ['Poiret One', 'sans-serif']
      },
    },
  },
  plugins: [],
}

