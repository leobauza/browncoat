var gulp = require('gulp');

gulp.task('watch', ['browserify'], function(callback) {
  //console.log("running watch...");
  gulp.watch('./sites/all/themes/jf/src/scss/**/*.scss', ['sass']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});