const gulp         = require('gulp'),
      gulpSequence = require('gulp-sequence'),
      gutil        = require('gulp-util');

gulp.task('default', (cb) => {

  let mode = gutil.env.mode;

  if (mode === 'docs') {

    gulpSequence('sprite', ['css', 'js'], 'watch', cb);

  } else if (mode === 'prod') {
    // Needs versioning for sprites (to break cache)
    // anything else??? (clean?)
    gulpSequence('sprite', ['css', 'js'], cb);

  } else {

    // Default.
    gulpSequence('sprite', ['css', 'js'], 'watch', cb);

  }

});
