var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {

  browserSync.init({
    server: {
      baseDir: './'
    }
  });


  gulp.watch('./sass/**/*.scss', gulp.parallel('sass'));
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('sass', 'serve'));
