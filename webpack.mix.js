let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// Mix Graze CSS framework
mix.less('src/graze-css/graze-css.less', 'dist/');
mix.copy('dist/graze-css.css', '/Users/jakeryansmith/Code/grazecart/public/css/graze.css');
mix.copy('dist/graze-css.css', '/Users/jakeryansmith/Code/gcmarketing/public/css/graze.css');

// Mix Theme Editor
mix.less('src/theme-editor/theme-editor.less', 'dist/');
mix.copy('dist/theme-editor.css', '/Users/jakeryansmith/Code/grazecart/public/css/');

// Mix Template Editor
mix.less('src/template-editor/template-editor.less', 'dist/');
mix.copy('dist/template-editor.css', '/Users/jakeryansmith/Code/grazecart/public/css/');
