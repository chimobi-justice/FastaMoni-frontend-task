/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        fastaColor: {
          50: '#EBF1FF',
          100: '#707070',
          200: '#0F0D1D',
          300: '#3C72FC',
          400: '#434B4D',
          500: '#000000',
          600: '#0F0D1D',
          700: '#F2F4F8',
          800: '#726F84',
          900: '#07122D',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
