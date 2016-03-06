var config = require('../config');


var gulp =        require("gulp"),
    css =         require("./css"),
    path =        require("path"),
    browserSync = require('browser-sync'),
    modRewrite  = require('connect-modrewrite');

var paths = {
  src: path.join(config.root.src, config.tasks.css.src),
  dest: path.join(config.root.docs, config.tasks.css.dest)
};

gulp.task("docs", function () {

  console.log("args", process.argv);
  console.log("args", process.execArgv);
  gulp.watch(config.root.src + '/scss/**/*.scss', function () {
    css(paths);
  });

})
