var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssnext = require('postcss-cssnext')
var atImport = require('postcss-import')

gulp.task('css', function () {
  var processors = [
    atImport,
    cssnext()
  ]
  return gulp.src('./src/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
})

gulp.task('watch', function () {
  gulp.watch('src/**/*.css', ['css'])
})

gulp.task('default', ['css', 'watch'])
