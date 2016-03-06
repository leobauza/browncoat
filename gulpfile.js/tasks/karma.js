var gulp =    require('gulp'),
    path =    require('path'),
    Server =  require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('karma', function () {
  new Server({
    configFile: path.join(__dirname, '../..', 'karma.conf.js'),
    singleRun: true
  }, function (ec) {
    return ec;
  }).start();
});