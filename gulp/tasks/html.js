var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin', function() {
	return  gulp.src('./src/html/*.html')
				.pipe(htmlmin(
						{
							removeComments: true,
							collapseWhitespace: true
						}
					)
				)
				.pipe(gulp.dest('./public/html'));
});	

gulp.task('htmlmin-index', function() {
	return  gulp.src('./src/index.html')
				.pipe(htmlmin(
						{
							removeComments: true,
							collapseWhitespace: true
						}
					)
				)
				.pipe(gulp.dest('./public'))
				.pipe(livereload());
})