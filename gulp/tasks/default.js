var gulp = require('gulp');

//havent figured out gulp-watch yet (though it is resting in dev dependencies)
					//use built-in watcher
gulp.task('default', ['watch'], function() {
	gulp.run('imgmin');
});