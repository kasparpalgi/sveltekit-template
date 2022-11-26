/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        cnPurple: '#42375b',
        cnGreen: '#00d857',
        cnRed: '#d94167'
      }
    }
  },
  plugins: [require("daisyui")]
};