var gulp = require('gulp'),
	concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify');

//concatenate all the .js files to the public one 
//and apply compression
gulp.task('js', function() {
    return  gulp.src('./src/javascript/*.js')
    		    .pipe(plumber())
    	    	.pipe(concat('finalcut.js'))
    	    	.pipe(uglify())
    	    	.pipe(gulp.dest('./public/javascript'));
});