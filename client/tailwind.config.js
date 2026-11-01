/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#080D1A",
        surface: "#111A2B",
        card: "#141E32",
        primary: "#7657FF",
        secondary: "#388BFF",
        muted: "#A5B0C5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7657FF 0%, #388BFF 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(118,87,255,0.55)",
      },
    },
  },
  plugins: [],
};
