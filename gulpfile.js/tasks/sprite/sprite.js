var config = require('../../config');

if (!config.tasks.sprite) { return; }

var gulp =      require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    svg2png =   require('gulp-svg2png'),
    gutil =     require('gulp-util'),
    path =      require('path');

const mode = gutil.env.mode; // docs/prod/default

var dest = mode === "docs" ? "docs" : "dest";

var paths = {
  src: path.join(config.root.src, config.tasks.sprite.entry),
  dest: config.root.base,
  scssDest: path.join(config.root.src, config.tasks.sprite.scssDest),
  spriteDest: path.join(config.root[dest], config.tasks.sprite.spriteDest),
  spriteEndLocation: path.join(config.root.base, config.root[dest], config.tasks.sprite.spriteDest)
};

var spriteTask = function () {
  var sprite = {
    shape: {
      spacing: {
        padding: 5
      }
    },
    mode: {
      css: {
        dest: '.',
        bust: false,
        prefix: '',
        render: {
          scss: {
            template: './gulpfile.js/tasks/sprite/sprite-template.scss',
            dest: paths.scssDest
          }
        },
        sprite: paths.spriteDest + "/" + config.tasks.sprite.fileName,
      }
    },
    variables: {
      spriteFile: config.tasks.sprite.fileName,
      calcOffset: function () {
        return function (values, render) {
          var vals = render(values).split('|');
          return vals[0] - vals[1];
        };
      },
      png: function() {
        return function(sprite, render) {
          return render(sprite).split('.svg').join('.png');
        };
      }
    }
  };

  return gulp.src(paths.src)
    .pipe(svgSprite(sprite))
    .pipe(gulp.dest(paths.dest));
};

var pngSpriteTask = function() {
  return gulp.src(paths.spriteEndLocation + '/' + config.tasks.sprite.fileName)
    .pipe(svg2png())
    .pipe(gulp.dest(paths.spriteEndLocation));
};

gulp.task('svgSprite', spriteTask);
gulp.task('pngSprite', ['svgSprite'], pngSpriteTask);
gulp.task('sprite', ['pngSprite']);

module.exports = spriteTask;
