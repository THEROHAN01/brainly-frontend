/**@type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{
            colors: {
                brand: {
                    green: "#08CB00",    // Bright green accent
                    dark: "#253900",     // Dark green (very dark, almost black)
                    darker: "#1a2600",   // Even darker green (between dark and black)
                    black: "#000000",    // Pure black
                    light: "#EEEEEE",    // Light gray
                }
            }
        }
    },
    plugins:[],
}