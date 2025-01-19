import type { Config } from "tailwindcss";

export default {
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
        customDark: "#252525",
        customDark2: "#191919",
        customgreen: "#2DD171",
        customorange: "#F8AF3F"
      },
    },
  },
  plugins: [],
} satisfies Config;
