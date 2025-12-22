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
                    dark: "#253900",     // Dark green
                    black: "#000000",    // Pure black
                    light: "#EEEEEE",    // Light gray
                }
            }
        }
    },
    plugins:[],
}