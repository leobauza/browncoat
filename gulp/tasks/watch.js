var gulp = require('gulp'),
    config = require('../config').main;

gulp.task('watch', ['browserify'], function(callback) {
  //console.log("running watch...");
  gulp.watch(config.src + '/scss/**/*.scss', ['sass']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});