const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.browserSync({
    proxy: 'localhost:8000/',
});

mix.disableNotifications();


mix.js('./resources/js/main.js', 'public/js').vue().version()

//mix.sass('./resources/sass/app.scss', 'public/css').version()

mix.webpackConfig(require('./webpack.config'));


mix.browserSync({
    proxy: "dev.laravel-ecommerce",
    notify: false,
    open: false,
})
