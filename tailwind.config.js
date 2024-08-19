/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Montserrat", ...defaultTheme.fontFamily.sans],
                secundary: ["Roboto Flex", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                "card-pattern": "url('/pattern.jpg')",
            },
        },
    },
    plugins: [],
};
