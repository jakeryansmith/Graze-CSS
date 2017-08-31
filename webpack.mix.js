let mix = require('laravel-mix');


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
