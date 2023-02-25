/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            'serif': ['Gloock', 'serif'],
        }
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#FFCE00",  // default emoji yellow
                    "secondary": "#FF6B6B",  // bright red
                    "accent": "#67D5B5",  // mint green
                    "neutral": "#F3F3F3",  // light gray
                    "base-100": "#FFFFFF",  // white
                    "info": "#6FA8DC",  // sky blue
                    "success": "#8ED081",  // light green
                    "warning": "#FFC65B",  // yellow-orange
                    "error": "#F15B5B",  // dark red
                }
                ,
            },
        ],
    },
}