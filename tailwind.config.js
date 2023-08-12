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
            boxShadow: {
                'around-sm': '0 0 1px 1px',
                'inner-xl': 'inset 0 0px 20px 0',
            },
            colors: {
                'red': '#FF0000',
                'passion': '#920000',
                'bordeaux': '#6D0711',
                'lightgray': '#A4A4A4',
                'gray': '#201E24',
                'transparentGray': 'rgba(32, 30, 36, .2)',
                'shadowedWhite': '#F9F9F9',
                'beige': '#FFDABD',
                'error': '#CC4536',
                'warning': '#FFC700',
                'working': '#70D52E',
                'success': '#2EA2D5'
            },
            fontFamily: {
                'source': ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
    safelist: [{
        pattern: /(bg|text|border|shadow)-(red|passion|bordeaux|lightgray|gray|transparentGray|shadowedWhite|beige|error|warning|working|success)/
    }]
};
