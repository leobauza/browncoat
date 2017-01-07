var config = require('../config');

if (!config.tasks.js) { return; }

var gulp =        require('gulp'),
    gutil =       require('gulp-util'),
    webpack =     require('webpack'),
    logger =      require('../util/logger'),
    path =        require("path"),
    _ =           require("underscore"),
    gutil =       require('gulp-util'),
    browserSync = require("browser-sync");

const mode = gutil.env.mode; // docs/prod/default

var src = mode === "docs" ? "docs" : "src";
var dest = mode === "docs" ? "docs" : "dest";
var entries = mode === "docs" ? "doc_entries" : "entries";


var webPackConfig = {
  context: path.resolve(config.root[src], config.tasks.js[src]),
  entry: config.tasks.js[entries],
  output: {
    path: path.resolve(config.root[dest], config.tasks.js.dest),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  resolve: { // Maybe only for docs?
    alias: {
      app: path.resolve(config.root.src, config.tasks.js.src)
    }
  }
};

var webPackProdConfig = _.extend({
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "uglify"
      }
    ]
  }
},webPackConfig);

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
};

// var jsProdTask = function (callback) {
//   webpack(webPackProdConfig, function (err, stats) {
//     logger(err, stats);
//     callback();
//   });
// };

// gulp.task('prodJs', jsProdTask);
gulp.task('js', jsTask);
module.exports = jsTask;
