var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('es6to5', function () {
  return gulp.src('src/es6/*.js')
    .pipe(sourcemaps.init())
    // .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest('build/src'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('sourcemaps'))
    .pipe(gulp.dest('build/min'));
});

gulp.task('build', ['es6to5']);
