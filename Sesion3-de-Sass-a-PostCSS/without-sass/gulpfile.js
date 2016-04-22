var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var simplevars = require('postcss-simple-vars');
var cssimport = require('postcss-import');
var mixins = require('postcss-mixins');
var nested = require('postcss-nested');

gulp.task('css', function() {
    var processors = [
        cssimport,
        autoprefixer,
        simplevars,
        mixins,
        nested
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.css', ['css']);
});


gulp.task('default', ['css', 'watch']);
