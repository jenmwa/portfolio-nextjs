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
      blue: '#577590',
      teal: '#43AA8B',
      green: '#90BE6D',
      yellow: '#F9C74F',
      orange: '#F8961E',
      redOrange: '#F3722C',
      red: '#F94144',
      gray: {
        100: '#f7fafc',
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
