/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
    plugins: [
        PrimeUI
    ],
    content: [
        "./node_modules/@iatec/nephos-layout/**/*.{html,js}",
        "./node_modules/@iatec/nephos-pages/**/*.{html,ts}",
        "./src/**/*.{html,ts}"
    ]
};