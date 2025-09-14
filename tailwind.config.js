/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)", // You can customize the blur amount here
      },
    },
  },
  variants: {
    backdropFilter: ["responsive"],
  },
  plugins: [],
};
