// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-first': '#8E1616',
        'accent-second': '#D84040',
        'accent-third': '#B03052', // DANGER: BREAK IN CASE OF EMERGENCY!
        'w-background': '#1D1616',
        'primary-text': '#EEEEEE', 
        'secondary-text': '#E5D0AC', 
      },
    },
  },
};

export default config;
