import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    colors: {
      cyan: "#D9FDFF",
      oxford: "#0A122A",
      asparagus: "#698F3F",
      bole: "#804E49",
      apricot: "#F7C4A5",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
