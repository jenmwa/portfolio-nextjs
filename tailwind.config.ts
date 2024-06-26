import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: '000000',
      white: '#fff',
      blue: '#577590',
      teal: '#43AA8B',
      green: '#90BE6D',
      yellow: '#F9C74F',
      orange: '#F8961E',
      redOrange: '#F3722C',
      red: '#F94144',
      gray: {
        100: '#f7fafc',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
    extend: {
      fontFamily: {
        heading: ['Londrina Solid', 'sans-serif'],
        paragraph: ['Ubuntu Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
