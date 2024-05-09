import type { Config } from "tailwindcss";

const config: Config = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // ダークモードを無視できない。
  // darkMode: 'media',
  
  // darkMode: 'class',
  // darkMode: `false`,

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      'font-hiragino': ['ヒラギノ角ゴ StdN','Hiragino Kaku Gothic StdN', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
      }
    },
  },
};

export default config;
