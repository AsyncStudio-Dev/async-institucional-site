/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}", "./src/views/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-forest": "#0B0F0B",
        "mint-white": "#E9F7EC",
        "sage-gray": "#47594D",
        "async-green": "#22C55E",
        "light-mint": "#A7F3D0",
        background: "#FFFFFF",
        surface: "#F8FCF9",
        "surface-soft": "#E9F7EC",
        "text-primary": "#0B0F0B",
        "text-secondary": "#47594D",
        "text-on-dark": "#E9F7EC",
        border: "rgba(71, 89, 77, 0.15)",
        "border-dark": "rgba(167, 243, 208, 0.12)",
        "state-success": "#22C55E",
        "state-info": "#3B82F6",
        "state-warning": "#F59E0B",
        "state-error": "#EF4444",
      },
      fontFamily: {
        display: ["var(--font-geist)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        body: ["var(--font-inter)", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        sm: "10px",
        DEFAULT: "14px",
        md: "14px",
        lg: "20px",
      },
      boxShadow: {
        card: "0 12px 32px rgba(11, 15, 11, 0.08)",
      },
      transitionDuration: {
        250: "250ms",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
