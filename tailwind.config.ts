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
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/*.{js,ts,jsx,tsx,mdx}",
    "./app/*.{js,ts,jsx,tsx,mdx}",
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
