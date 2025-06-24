// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // ana mavi
        secondary: "#F59E0B", // sarımsı amber
        danger: "#DC2626", // kırmızı
        brand: {
          DEFAULT: "#6366F1", // bg-brand
          light: "#A5B4FC", // bg-brand-light
          dark: "#4F46E5", // bg-brand-dark
        },
      },
    },
  },
  plugins: [],
};
