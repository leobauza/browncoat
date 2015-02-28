var gulp = require('gulp'),
    sass = require('gulp-sass'),
    handleErrors = require('../util/handleErrors'),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('../config').sass;

gulp.task('sass', function () {

  return gulp.src(config.entry)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: config.style
    }))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));

});