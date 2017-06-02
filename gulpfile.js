'use strict';

let gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	sass = require('gulp-sass');
	// autoprefixer = require('gulp-autoprefixer'),
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: 'index.html'
    }));
});

gulp.task('prod', function() {
   return gulp.src('/sass/test.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer({
    	browsers: ['> 5%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('sass', function () {
  return gulp.src('sass/test.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('css/*.css', ['sass']);
});

gulp.task('sass:watch', function () {
  gulp.watch('**/**', ['sass']);
});

gulp.task('prefix', function () {
	return gulp.src('css/test.css')
		.pipe(autoprefixer({
    	browsers: ['> 5%', 'last 3 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'));
});