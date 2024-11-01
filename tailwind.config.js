/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          roboto: ['Poppins', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
