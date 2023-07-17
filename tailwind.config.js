/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'car-login': "url('assets/sedan-lujo-rojo-carretera.jpg')",
        'carros': "url('img/carro/carro3.jpeg)",
        'motos': "url('img/moto/moto11.jpg)",
        'camiones': "url('img/camione/camione1.png)"
      },
      fontFamily: {
        roboto: ['Roboto'],
        nunito: ['Nunito'],
        montserrat: ['Monserrat'],
        arial: ['Arial'],
      },
      gridTemplateColumns: {
        gallery: 'repeat(auto-fill, minmax(350px, 1fr))',
        gallery1: 'repeat(auto-fill, minmax(500px, 1fr))'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'),
            require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class'
};
