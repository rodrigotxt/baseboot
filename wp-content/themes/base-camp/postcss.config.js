// https://stackoverflow.com/questions/55606865/combining-tailwind-css-with-sass-using-webpack
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        cssnano({
            preset: 'default',
        }),
        autoprefixer
    ]
 }