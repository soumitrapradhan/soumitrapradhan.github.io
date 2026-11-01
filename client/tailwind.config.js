/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
  bg: "#020804",
  surface: "#06130A",
  card: "#08170C",
  primary: "#00FF66",
  secondary: "#22D3EE",
  muted: "#8FB59B",
},
fontFamily: {
  sans: ["JetBrains Mono", "Fira Code", "monospace"],
  display: ["JetBrains Mono", "Fira Code", "monospace"],
},
backgroundImage: {
  "brand-gradient": "linear-gradient(135deg, #00FF66 0%, #22D3EE 100%)",
},
boxShadow: {
  glow: "0 0 30px -8px rgba(0,255,102,0.55)",
},
    },
  },
  plugins: [],
};
