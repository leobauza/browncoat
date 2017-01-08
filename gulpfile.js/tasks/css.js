const config = require('../config');

if (!config.tasks.css) { return; }

const gulp =          require('gulp'),
      sass =          require('gulp-sass'),
      handleErrors =  require('../util/handleErrors'),
      sourcemaps =    require('gulp-sourcemaps'),
      path =          require('path'),
      autoprefixer =  require('gulp-autoprefixer'),
      cssnano =       require('gulp-cssnano'),
      browserSync =   require('browser-sync'),
      gutil =         require('gulp-util'),
      gulpif =        require('gulp-if');

const mode = gutil.env.mode, // docs/prod/default
      dest = mode === "docs" ? "docs" : "dest",
      src = mode === "docs" ? "docs" : "src",
      isProd = mode === 'prod';

const paths = {
  src: path.join(config.root[src], config.tasks.css[src]),
  dest: path.join(config.root[dest], config.tasks.css.dest)
};

let sassconf = {};
if (mode === 'docs') {
  sassconf = {
    includePaths: path.join(config.root.src, "./scss")
  };
}

let cssnanoconf = {
  autoprefixer: false,
  mergeRules: false // why? oh...ie 8 support because if combining rules with unrecognized rules crap breaks...
};

let autoprefixerconf = {
  browsers: ['last 3 versions'],
  cascade: false
};

const cssTask = () => {
  return gulp.src(paths.src)
    .pipe(sourcemaps.init())
    .pipe(sass(sassconf))
    .on('error', handleErrors)
    .pipe(autoprefixer(autoprefixerconf))
    .pipe(gulpif( !isProd, sourcemaps.write() ))
    .pipe(gulpif( isProd, cssnano(cssnanoconf) ))
    .pipe(gulp.dest(paths.dest))
    .pipe(gulpif( !isProd, browserSync.stream() ));
};

gulp.task('css', cssTask);
module.exports = cssTask;
