var gulp = require('gulp')
var postcss = require('gulp-postcss')
var atImport = require('postcss-import')
var mixins = require('postcss-mixins')
var nested = require('postcss-nested')
var simplevars = require('postcss-simple-vars')
var autoprefixer = require('autoprefixer')


gulp.task('css', function () {
  var processors = [
    atImport,
    mixins,
    nested,
    simplevars,
    autoprefixer
  ]
  return gulp.src('./src/style.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dest'))
})

gulp.task('watch', function () {
  gulp.watch('src/**/*.css', ['css'])
})

gulp.task('default', ['css', 'watch'])
