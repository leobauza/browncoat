const gulp         = require('gulp'),
      gulpSequence = require('gulp-sequence'),
      gutil        = require('gulp-util');

// set a global here depending on the task (just use process.argv[2] or yargs later?)...
// make a doc task
// the global config is set from the appropriate object in the config.json file...

// gulp.task('prod', function () {
//   console.log(process.argv[1], process.argv[2], process.argv[3]);
//   // global.env = 'production';
//   // Needs versioning for sprites (to break cache)
//   // anything else??? (clean?)
//   // gulpSequence('sprite', 'css', 'js');
// });

// gulp.task('docs', function (cb) {
//   gulpSequence('css', cb);
// });

gulp.task('default', (cb) => {

  let env = gutil.env.mode;

  if (env === 'default') {

    gulpSequence('css', cb);

  } else if (env === 'docs') {

    gulpSequence('css', cb);

  } else if (env === 'prod') {

    gulpSequence('css', cb);

  }

});


// gulp.task('default', ['watch']);
// gulp.task('prod', ['sprite', 'prodJs', 'prodCss']);
