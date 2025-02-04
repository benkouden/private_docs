import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       blue_Gray:"#E9F0FF",
       primary:"#246BFD",
       text:"#04060F"
      },
    },
  },
  plugins: [],
} satisfies Config;
