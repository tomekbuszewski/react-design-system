/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      height: {
        "form-element": "38px",
      },
      fontSize: {
        base: "12px",
      },
      spacing: {
        small: "4px",
        medium: "8px",
        large: "16px",
      },
      colors: {
        grey: {
          dark: "#454545",
          minor: "#8B9CA0",
          light: "#ccc",
        },
        blue: {
          light: "#A7DBD8",
          dark: "#062E4C",
        },
        red: {
          light: "#FFA5A5",
          dark: "#4C0606",
        },
        green: {
          light: "#C1ECCC",
          dark: "#0B7F2A",
        },
        bg: "#fff",
      },
      boxShadow: {
        card: "0 8px 32px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
