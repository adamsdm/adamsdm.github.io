var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    connect = require('gulp-connect'),
    filter = require('gulp-filter'),
    mainBowerFiles = require('main-bower-files');




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


 // sass -> css -> minify
gulp.task('styles', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('libs', function(){

    /* FONT AWESOME */
    // Copy font-awesome fonts
    gulp.src('bower_components/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./dist/libs/font-awesome/fonts'));
    // Compile sass
    gulp.src('bower_components/font-awesome/scss/font-awesome.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/libs/font-awesome/css'));

    /* BOOTSTRAP */
    // Compile sass
    gulp.src('bower_components/bootstrap/scss/bootstrap.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/libs/bootstrap/css'));
    // Copy js
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./dist/libs/bootstrap/js'));

    /* JQUERY */
    gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('./dist/libs/jquery'));

    /* TETHER */
    gulp.src('bower_components/tether/dist/js/tether.min.js')
        .pipe(gulp.dest('./dist/libs/tether'));

});

gulp.task('libs2', function(){

    /* FONT AWESOME */
    // Copy font-awesome fonts
    gulp.src('bower_components/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./dist/libs/fonts'));
    // Compile sass
    gulp.src('bower_components/font-awesome/scss/font-awesome.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/libs/css'));


    /* ALL OTHER */
    var jsFilt = filter('**/*.js');
    var cssFilt = filter('**/*.css');
    var scssFilt = filter('**/*.scss');
    
    var all = gulp.src(mainBowerFiles());

        // JS
        all.pipe(jsFilt)
            .pipe(gulp.dest('./dist/libs/js'));

        // CSS
        all.pipe(cssFilt)
            .pipe(gulp.dest('./dist/libs/css'));

        // SCSS
        all.pipe(scssFilt)
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest('./dist/libs/css'));

});


// Watch task
// watches JS
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['scripts']); 
    gulp.watch('sass/*.scss', ['styles']); 
})

gulp.task('dist', ['scripts', 'styles', 'libs2']);          // dist build
gulp.task('prod', ['dist','connect', 'watch']);         // prod build
gulp.task('default', ['prod']);