var config = require('../config');

if (!config.tasks.css) { return; }

var gulp =          require('gulp'),
    sass =          require('gulp-sass'),
    handleErrors =  require('../util/handleErrors'),
    sourcemaps =    require('gulp-sourcemaps'),
    path =          require('path'),
    autoprefixer =  require('gulp-autoprefixer'),
    cssnano =       require('gulp-cssnano'),
    browserSync =   require('browser-sync');

var dest = process.argv[2] === "docs" ? "docs" : "dest";
var src = process.argv[2] === "docs" ? "docs" : "src";

var paths = {
  src: path.join(config.root.src, config.tasks.css[src]),
  dest: path.join(config.root[dest], config.tasks.css.dest)
};

var cssTask = function () {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
};

var cssProdTask = function () {
  return gulp.src(paths.src)
    .pipe(sass())
    .on('error', handleErrors)
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(cssnano({
      autoprefixer: false,
      mergeRules: false
    }))
    .pipe(gulp.dest(paths.dest));
};

gulp.task('prodCss', cssProdTask);
gulp.task('css', cssTask);
module.exports = cssTask;
