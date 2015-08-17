var gulp = require('gulp'),
	// uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	errmessage = 'sass in not compiled';



//scirpts
// gulp.task('scripts', function() {
// 	gulp.src('assets/js/*.js')
// 	.pipe(uglify())
// 	.pipe(gulp.dest('assets/js/'));
// });


//sass
gulp.task('sass', function () {
    return sass('assets/css/*.sass')
        .on('error', console.error.bind(console))
        .pipe(gulp.dest('assets/css/'))
        .pipe(livereload());
});


//live reload

//watch
gulp.task('watch', function() {
	livereload.listen();
	// gulp.watch('assets/js/*js', ['scripts']);
	gulp.watch('assets/css/*.sass', ['sass'])
});

//default
gulp.task('default', ['sass', 'watch']);