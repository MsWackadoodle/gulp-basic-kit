var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin');
 
gulp.task('imgmin', function() {
	return  gulp.src('./src/img/*.*')
				.pipe(imagemin())
		    	.pipe(gulp.dest('./public/img'))
		    	.pipe(livereload());
});