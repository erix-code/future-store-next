import type { Config } from "tailwindcss";

const config: Config|any = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#13111a",
        secondary: "#e4e1f6",
        borderColor: "#302c3f",
      },
      boxShadow: {
        "light-shadow": "0 0 4rem hsla(0, 0%, 100%, .2)"
      }
    },
  },
  plugins: [],
};
export default config;
