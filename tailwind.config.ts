import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rojo: {
          500: "#D0021B",
          600: "#B60017",
          700: "#8E0012",
        },
        carbon: "#0A0A0B",
        metal: "#A3A8B3",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(208,2,27,0.4), 0 20px 50px rgba(182,0,23,0.18)",
      },
      backgroundImage: {
        radial: "radial-gradient(circle at top, rgba(208,2,27,0.2), transparent 50%)",
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
