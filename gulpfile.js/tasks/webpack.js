var config = require('../config');

if (!config.tasks.js) { return; }

var gulp =        require("gulp"),
    gutil =       require("gulp-util"),
    webpack =     require("webpack"),
    logger =      require('../util/logger'),
    path =        require("path"),
    browserSync = require("browser-sync");

var webPackConfig = {
  context: path.resolve(config.root.src, config.tasks.js.src),
  entry: config.tasks.js.entries,
  output: {
    path: path.resolve(config.root.dest, config.tasks.js.dest),
    filename: '[name].js'
  }
};

var jsTask = function (callback) {
  var initialCompile = false;
  webpack(webPackConfig).watch({
    aggregateTimeout: 300,
    poll: true
  }, function (err, stats) {

    logger(err, stats);
    browserSync.reload();

    if (!initialCompile) {
      initialCompile = true;
      callback();
    }

  });
}

gulp.task("js", jsTask);
module.exports = jsTask;