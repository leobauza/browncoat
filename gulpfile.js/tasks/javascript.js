var config = require('../config');

if (!config.tasks.js) { return; }

const gulp =        require('gulp'),
      gutil =       require('gulp-util'),
      webpack =     require('webpack'),
      logger =      require('../util/logger'),
      path =        require("path"),
      browserSync = require("browser-sync");

const mode = gutil.env.mode; // docs/prod/default

var src = mode === "docs" ? "docs" : "src";
var dest = mode === "docs" ? "docs" : "dest";
var entries = mode === "docs" ? "doc_entries" : "entries";

let webpackConfig = {
  context: path.resolve(config.root[src], config.tasks.js[src]),
  entry: config.tasks.js[entries],
  output: {
    path: path.resolve(config.root[dest], config.tasks.js.dest),
    filename: '[name].js'
  }
};

/**
 * [docs] resolve.alias to allow easy inclusion of app modules.
 * [docs] module.loaders for es2015 and preacts
 * [prod] module.loaders for es2015 and uglifying
 * [default] module.loaders for es2015
 * @todo
 *   Add preact setup for docs.
 */
if (mode === 'docs') {
  webpackConfig = Object.assign({}, webpackConfig, {
    resolve: {
      alias: {
        app: path.resolve(config.root.src, config.tasks.js.src)
      }
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
    }
  });
} else if (mode === 'prod') {
  webpackConfig = Object.assign({}, webpackConfig, {
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
    plugins: [
      new webpack.optimize.UglifyJsPlugin()
    ]
  });
} else {
  webpackConfig = Object.assign({}, webpackConfig, {
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
    }
  });
}

var jsTask = function (callback) {
  if (mode === 'prod') {
    webpack(webpackConfig, function (err, stats) {
      logger(err, stats);
      callback();
    });
  } else {
    var initialCompile = false;
    webpack(webpackConfig).watch({
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
};

gulp.task('js', jsTask);
module.exports = jsTask;
