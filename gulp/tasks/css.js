var gulp = require('gulp'),
	sass = require('gulp-sass'),
	prefix = require('gulp-autoprefixer'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber');

gulp.task('css', function() {
	return  gulp.src('./src/css/*.scss')
		    	.pipe(plumber())
		    	// entering the 'duh-zone': 
		   		// it does the concatenation in aplhabetical order -- 
		   		   //dont use different files writing for the same block 
		   		// rules may be unfortunately overwritten 
		   		//just basically dont do dat
		    	.pipe(concat('styles.css'))
		    	.pipe(sourcemaps.init())
		    	.pipe(sass(
		   				{
		   					//may consider using gulp-csso for compression
		   					outputStyle: 'compressed'
		   				}
		   			)
		    	)
		    	.pipe(prefix(
		   			{
		   				browsers: ['last 2 versions'],
		   				cascade: false
		   			}
		   		))
		    	.pipe(sourcemaps.write('./'))
		    	.pipe(gulp.dest('./public/css'))
});