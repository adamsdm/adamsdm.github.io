var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    port: 8000
  });
});

// Scripts task
// Uglifies
gulp.task('scripts', function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('libs', function() {
    gulp.src(['bower_components/bootstrap/dist/css/bootstrap.min.css',
              'bower_components/font-awesome/css/font-awesome.min.css'])
    .pipe(gulp.dest('dist/libs'));
});

 // sass -> css -> minify
gulp.task('styles', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

// Watch task
// watches JS
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']); 
    gulp.watch('sass/*.scss', ['styles']); 
})

gulp.task('build', ['scripts', 'styles']);
gulp.task('default', ['scripts', 'styles','connect', 'watch']);
