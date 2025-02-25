/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors:{
        primaryBG: "#E9E9E9", //Light gray
        secondary: "#1B3A4B", // Dark Blue
        primaryBlue: "#02C8DA", // Logo Blue
        wrongState: "#FF6B6B", // Red
        textColor: "#000000", // Black
        darkGray: "#474646",  // Dark Gray
        lightGray: "#A8A8A8",  // Light Gray
        whiteColor: "#ffffff", // White
      },

      fontFamily:{
        poppins: ["Poppins", "sans-serif"]
      },

      fontSize: {
        "xxs": "0.625rem",
        xs: "0.75rem",  // Small text (12px)
        sm: "0.875rem", // Standard mobile text (14px)
        base: "1rem",   // Default (16px)
        lg: "1.125rem", // Slightly larger (18px)
        xl: "1.25rem",  // Large text (20px)
        "2xl": "1.5rem", // Heading size (24px)
        "3xl": "1.875rem", // Big Heading (30px)
        "4xl": "2.25rem", // Extra Large Heading (36px)
      },
    },

    container:{
      center: true,
      padding: "1rem"
    }
  },
  plugins: [],
}

