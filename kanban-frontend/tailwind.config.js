/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    colors: {
      'gray': {
        100: "#F4F7FD",
        200: "#E0E3E8",
        300: "#828FA3",
        300: "#3E3F4E",
        400: "#2B2C37",
      },
      'black': {
        100: "#20212C",
        200: "#000112"
      },
      'violet': {
        100: "#E4EBFA",
        200: "#A8A4FF",
        300: "#635FC7",
      },
      'red': {
        100: "#FF9898",
        200: "#EA5555"
      },
      'white': {
        100: "#FFFFFF"
      }
    },
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.813rem",
      "base": "0.938rem",
      "lg": "1.125rem",
      "xl": "1.5rem"
    },
    extend: {
      lineHeight: {
        base :"125%",
        lg: "175%",
      }
    },
    screens: {
      'md': '768px',
      '2xl': '1440px',
    }
  },
  plugins: [],
}

