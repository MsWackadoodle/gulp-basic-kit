var gulp = require('gulp');

gulp.task('watch', function() {
	gulp.watch('./src/javascript/*.js', ['js']);
	gulp.watch('./src/css/*.scss', ['css']);
});