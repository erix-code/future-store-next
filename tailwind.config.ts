import type {Config} from "tailwindcss";
import plugin from "tailwindcss/plugin";
const config: Config | any = {
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
            textShadow: {
                sm: '0 1px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                lg: '0 8px 16px var(--tw-shadow-color)',
                xl: '0px 0px 7px var(--tw-shadow-color), 0px 0px 10px var(--tw-shadow-color), 0px 0px 21px var(--tw-shadow-color)',
            },
            boxShadow: {
                "light-shadow": "0 0 4rem hsla(0, 0%, 100%, .2)"
            }
        },
    },
    plugins: [
      plugin(function ({ matchUtilities, theme }) {
        matchUtilities(
            {
              'text-shadow': (value) => ({
                textShadow: value,
              }),
            },
            { values: theme('textShadow') }
        )
      }),
    ],
};
export default config;
