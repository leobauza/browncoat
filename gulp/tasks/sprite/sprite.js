var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    svg2png = require('gulp-svg2png'),
    config = require('../../config').sprite;

gulp.task('svgSprite', function () {

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
            template: './gulp/tasks/sprite/sprite-template.scss',
            dest: config.scss
          }
        },
        sprite: config.sprite + config.name,
      }
    },
    variables: {
      spriteFile: config.name,
      calcOffset: function () {
        return function (values, render) {
          var vals = render(values).split('|');
          return vals[0] - vals[1];
        };
      }
    }
  };

  return gulp.src(config.entry)
    .pipe(svgSprite(sprite))
    .pipe(gulp.dest(config.dest));

});

gulp.task('pngSprite', ['svgSprite'], function() {
  return gulp.src(config.img + '/' + config.name)
    .pipe(svg2png())
    .pipe(gulp.dest(config.img));
});

gulp.task('sprite', ['pngSprite']);