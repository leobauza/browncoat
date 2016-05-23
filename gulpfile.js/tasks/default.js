var gulp = require('gulp');

gulp.task('default', ['watch']);
gulp.task('prod', ['sprite', 'prodJs', 'prodCss']);
