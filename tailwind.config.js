/**@type {import('tailwindcss').Config} */

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend:{
            colors: {
                purple:{
                    600:"#d9ddee",
                    500:"#9492db",
                    200:"#7164c0",
                }
            }
        }
    },
    plugins:[],
}