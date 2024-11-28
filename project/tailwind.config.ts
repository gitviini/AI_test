import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "var(--purple)",
        yellow:"var(--yellow)",
        orange:"var(--orange)",
        green:"var(--green)",
      },
      boxShadow: {
        "initial": "0.25rem 0.25rem 0 #000",
        "hover": "0.125rem 0.125rem 0 #000",
      }
    },
  },
  plugins: [],
};
export default config;
