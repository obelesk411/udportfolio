var gulp = require('gulp'),
	minifyCSS = require('gulp-clean-css'),
	minifyJS = require('gulp-jsmin'),
	minifyHTML = require('gulp-htmlmin'),
	minifyImg = require('gulp-imagemin');

gulp.task('minifyHTML', function() {
	return gulp.src('src/index.html')
		.pipe(minifyHTML({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));
});

gulp.task('minifyJS', function() {
	return gulp.src('src/js/*.js')
		.pipe(minifyJS())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('minifyCSS', function() {
	return gulp.src('src/css/*')
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('minifyImg', function() {
	return gulp.src('src/img/*')
		.pipe(minifyImg())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('default', ['minifyHTML', 'minifyJS', 'minifyCSS', 'minifyImg']);