var config = require('../config');

if (!config.tasks.css) { return; }

var gulp =          require('gulp'),
    sass =          require('gulp-sass'),
    handleErrors =  require('../util/handleErrors'),
    sourcemaps =    require('gulp-sourcemaps'),
    path =          require('path'),
    browserSync =   require('browser-sync');

var dest = process.argv[2] === "docs" ? "docs" : "dest";
var src = process.argv[2] === "docs" ? "docs" : "src";

var paths = {
  src: path.join(config.root.src, config.tasks.css[src]),
  dest: path.join(config.root[dest], config.tasks.css.dest)
};

var cssTask = function (override) {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

gulp.task('css', cssTask);
module.exports = cssTask;
