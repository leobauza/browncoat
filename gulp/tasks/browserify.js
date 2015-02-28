var gulp = require('gulp'),
    rename = require('gulp-rename'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    transform = require('vinyl-transform'),
    handleErrors = require('../util/handleErrors'),
    bundleLogger = require('../util/bundleLogger'),
    config = require('../config').browserify;

gulp.task('browserify', function () {

  var browserifyThis = function (bundleConfig) {
    var bundler,
        bundle,
        cache = {};

    bundler = function (filename) {

      if (cache[filename]) {
        return cache[filename].bundle();
      }

      b = browserify(filename, {
        cache: {},
        packageCache: {},
        fullPaths: true,
        paths: [
          './node_modules',
          './sites/all/themes/jf/src/js',
        ]
      });

      b = watchify(b);

      b
      .on('update', bundle)
      .on('error', handleErrors);

      cache[filename] = b;

      return b.bundle();

    };

    bundle = function () {

      var theFile = '';
      var bundle = transform(function (filename) {
        bundleLogger.start(filename);
        theFile = filename;
        return bundler(filename);
      });

      return gulp.src([bundleConfig.entry])
        .pipe(bundle)
        .pipe(rename(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest))
        .on('end', function () {
          bundleLogger.end(theFile);
        });
    };

    return bundle();

  };

  // loop through each bundleConfig
  // this allows for multiple bundles to be watched separately
  config.bundleConfigs.forEach(browserifyThis);

});
