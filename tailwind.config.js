/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/views/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ice: {
          white: "#F7F9FC",
          gray: "#E9EEF5",
          mist: "#DCE4EE",
          blue: "#CFE7FF",
          crystal: "#A9D4FF",
          glacier: "#7FBBFF",
        },
        async: {
          ink: "#0A0D12",
          graphite: "#5F6875",
          lavender: "#BBA7FF",
          frost: "#8A6CFF",
          "frost-dark": "#6C4DFF",
          cyan: "#9CEDE7",
        },
      },
      boxShadow: {
        glass: "0 24px 80px rgba(10, 13, 18, 0.08)",
        frost: "0 18px 60px rgba(138, 108, 255, 0.22)",
      },
      borderRadius: {
        async: "8px",
      },
      backgroundImage: {
        "frost-flow":
          "radial-gradient(circle at 18% 18%, rgba(156, 237, 231, 0.46), transparent 28rem), radial-gradient(circle at 86% 12%, rgba(187, 167, 255, 0.44), transparent 26rem), linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 48%, #E9EEF5 100%)",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
