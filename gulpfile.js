/**
 * Created by aaron on 2016/5/18.
 */

var gulp = require("gulp");
var clean = require("gulp-clean");
var browserSync = require("browser-sync");
var sass = require('gulp-sass');
var sequence = require('gulp-sequence');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function () {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('sass', function () {
    return gulp.src('./sass/luck.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['iOS 7', 'Android >= 4.0', 'last 2 Explorer versions']
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {

    gulp.watch('./sass/**/*', ['sass']);

    browserSync.init({
        server: {
            baseDir: "./",
            index: "admission-ticket.html"
        }
    });
    gulp.watch(["dist/**/*", "admission-ticket.html"]).on("change", browserSync.reload);
});
