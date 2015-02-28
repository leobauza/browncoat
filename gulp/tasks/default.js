var gulp = require('gulp');

// gulp.task('watch', function(callback) {
//   gulp.watch('./sites/all/themes/jf/src/js/**/*.js', ['browserify']);
//   // Watchify will watch and recompile our JS, so no need to gulp.watch it
// });

gulp.task('default', ['watch']);
// gulp.task('default', ['sass', 'images', 'markup', 'watch']);
// gulp.task('default', function () {
//   console.log("default gulp task");
// });