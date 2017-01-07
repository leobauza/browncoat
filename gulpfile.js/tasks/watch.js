var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync'),
    modRewrite  = require('connect-modrewrite');

var watchTask = function(callback) {

  var dest = process.argv[2] === "docs" ? "docs" : "dest";

  browserSync.init({
    // proxy: "http://browncoat.loc"
    server: {
      baseDir: process.argv[2] === "docs" ? "./docs" : "./web",
      middleware: [
        modRewrite([
          '^/assets/img/(.*) - [L]',
          '^/assets/css/(.*) - [L]', // allow browsersync to stream css
          '!\\.\\w+$ /index.html [L]' // check on this...
        ])
      ]
    }
  });

  gulp.watch(config.root.src + '/scss/**/*.scss', ['css']);
  gulp.watch(config.root[dest] + "/**/*.html").on('change', browserSync.reload);
  gulp.watch(config.root[dest] + "/**/*.md").on('change', browserSync.reload);
  gulp.watch(config.root[dest] + "/**/*.json").on('change', browserSync.reload);
};

gulp.task("watch", ["css", "js"], watchTask);
// gulp.task("docs", ["css", "js", "sprite"], watchTask);
module.exports = watchTask;
