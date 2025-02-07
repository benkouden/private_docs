import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Urbanist:["Urbanist","serif"]
      },
      colors: {
       blue_Gray:"#E9F0FF",
       primary:"#246BFD",
       text:"#04060F",
       light_text:"#9FA8BC",
       bg_2:"#F2F2F2",
       danger:"#F33F19",
       gray:"#E7EBF3",
       sucess:"#49C91E",
       succes_light :" #ECF9E8",
       danger_light:"#FDEBE8",
       info:"#30B2EA",
       info_light:"#EAF7FC",
       bgmodal:"#04060FCC"

      },
    },
  },
  plugins: [],
} satisfies Config;
