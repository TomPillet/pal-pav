import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                'red': '#FF0000',
                'passion': '#920000',
                'bordeaux': '#6D0711',
                'lightgray': '#A4A4A4',
                'gray': '#201E24',
                'shadowedWhite': '#F9F9F9',
            },
            fontFamily: {
                'source': ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
    safelist: [{
        pattern: /(bg|text|border)-(red|passion|bordeaux|lightgray|gray|shadowedWhite)/
    }]
};
