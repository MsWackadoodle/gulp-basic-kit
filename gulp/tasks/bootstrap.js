var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	livereload = require('gulp-livereload'),
	plumber = require('gulp-plumber');

gulp.task('bootstrap', function() {
	return  gulp.src('./node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
				.pipe(plumber())
				.pipe(concat('bootstrap.min.scss'))
				.pipe(sass(
		   				{
		   					//may consider using gulp-csso for compression
		   					outputStyle: 'compressed'
		   				}
		   			)
				)
				.pipe(gulp.dest('./public/css'))
				.pipe(livereload());
});	