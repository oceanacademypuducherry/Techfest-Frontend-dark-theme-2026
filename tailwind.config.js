/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      // colors: {
      //   // Custom colors
      //   success: "#B0DDB6",
      //   successDark: "#8AB78E",
      //   successProfebtn: "#003B08",
      //   successStubtn: "#0F172A",
      //   textBlack: "#282828",
      //   bgYellow: "#FFE7A5",
      //   bgPink: "#F8D8D8",
      //   bgBlue: "#C3ECF6",
      //   bgBlueDark: "#ADD8E2",
      //   navBlue: "#00B2FF",
      //   ticketButton: "#FFA908",
      //   bgLate: "#BABABA",
      //   bgLateDark: "#7C7C7C",
      //   buttonBgContinue: "#E7AC09",
      //   navBg: "#676767",
      // },
      colors:{
bgcolor: "#0A0C12",
text: "#D1D5DB",
blue:"#00C2FF"
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        marquee2: "marquee2 20s linear infinite",
        marquee3: "marquee3 7s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marquee3: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp"), // ✅ ADD HERE
    function ({ addUtilities, theme, e }) {
      addUtilities(
        {
          ".gradient-border": {
            position: "relative",
            borderRadius: theme("borderRadius.xl"),
          },
          ".gradient-border::before": {
            content: '""',
            position: "absolute",
            inset: "0",
            padding: "2px",
            background: "linear-gradient(45deg, #00A9FF, #84CDF3, #CD09C6)",
            borderRadius: theme("borderRadius.xl"),
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude",
          },
          // Marquee container
          ".marquee": {
            overflow: "hidden",
            position: "relative",
          },
          // Marquee inner content
          ".marquee-inner": {
            display: "inline-block",
            animation: "marquee 10s linear infinite",
          },
          
        },
        ["responsive", "hover", "focus"]
      );
    },
  ],
  daisyui: {
    themes: [],
  },
};
