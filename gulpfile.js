var gulp = require("gulp");
var browserify = require("gulp-browserify");
var concat = require("gulp-concat");

gulp.task("browserify", function() {
	gulp.src("js/app.js")
	.pipe(browserify({transform: 'reactify'}))
	.pipe(concat('dist/app.js'))
	.pipe(gulp.dest(''))
});

gulp.task('default', ["browserify"]);

gulp.task("watch", function(){
	// Watch will look into all files 
	// in the js folder(including the sub dirs)
	// and when any of them have changes, 
	// it'll run the default task 
	gulp.watch('js/**/*.*', ['default'])
})