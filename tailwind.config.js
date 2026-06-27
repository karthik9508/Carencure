/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./about.html",
    "./services.html",
    "./experience.html",
    "./certificates.html",
    "./gallery.html",
    "./blog.html",
    "./contact.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Dark Blue
        secondary: "#10B981", // Green
        neutral: "#FFFFFF", // White
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
