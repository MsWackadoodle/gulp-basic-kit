var gulp = require('gulp'),
	livereload = require('gulp-livereload');

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./src/javascript/*.js', ['js']);
	gulp.watch('./src/css/*.scss', ['css']);
	gulp.watch('./src/html/*.html', ['htmlmin']);
	gulp.watch('./src/index.html', ['htmlmin-index']);
	gulp.watch('./node_modules/bootstrap-sass/assets/stylesheets/bootstrap/**/*', ['bootstrap']);
});