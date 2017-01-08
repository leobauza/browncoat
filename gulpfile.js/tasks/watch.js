var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync'),
    modRewrite  = require('connect-modrewrite'),
    gutil       = require('gulp-util');

const mode = gutil.env.mode; // docs/prod/default

var watchTask = function(callback) {

  var dest = mode === "docs" ? "docs" : "dest";

  browserSync.init({
    // proxy: "http://browncoat.loc"
    server: {
      baseDir: mode === "docs" ? "./docs" : "./web",
      middleware: [
        modRewrite([
          '^/assets/img/(.*) - [L]',
          '^/assets/css/(.*) - [L]', // allow browsersync to stream css
          '!\\.\\w+$ /index.html [L]' // check on this...
        ])
      ]
    }
  });

  if (mode === 'docs') {
    gulp.watch(config.root.docs + '/src/scss/docs.scss', ['css']);
  }

  gulp.watch(config.root.src + '/scss/**/*.scss', ['css']);
  // gulp.watch(config.root[dest] + "/**/*.html").on('change', browserSync.reload);
  // gulp.watch(config.root[dest] + "/**/*.md").on('change', browserSync.reload);
  // gulp.watch(config.root[dest] + "/**/*.json").on('change', browserSync.reload);
};

gulp.task("watch", watchTask);
module.exports = watchTask;
