/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#A22CFF",
                    100: "#7A21BF",
                },
                foreground: "#120120",
            },
            fontFamily: {
                neue: ["NeueMontreal", "sans-serif"],
                technor: ['"Technor"', "sans-serif"],
                syne: ["Syne", "sans-serif"],
            },
        },
    },
    plugins: [],
};
