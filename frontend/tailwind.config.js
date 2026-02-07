/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#6366f1",
                    hover: "#4f46e5",
                },
                dark: {
                    bg: "#0f172a",
                    card: "#1e293b",
                },
                glass: {
                    DEFAULT: "rgba(255, 255, 255, 0.05)",
                    border: "rgba(255, 255, 255, 0.1)",
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
            backdropBlur: {
                glass: "12px",
            }
        },
    },
    plugins: [],
}
