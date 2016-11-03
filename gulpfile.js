/**
 * Created by aaron on 2016/5/18.
 */

var gulp = require("gulp");
var clean = require("gulp-clean");
var browserSync = require("browser-sync");
var sass = require('gulp-sass');
var less=require('gulp-less');
var sequence = require('gulp-sequence');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function () {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('luck', function () {
    return gulp.src('./sass/luck.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['iOS 7', 'Android >= 4.0', '> 1%']
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('gplqg', function () {
    return gulp.src('./sass/gplqg.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['iOS 7', 'Android >= 4.0', '> 1%']
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {

    gulp.watch('./sass/**/*', ['sass']);

    browserSync.init({
        server: {
            baseDir: "./",
            index: "doc/luckcss.html"
        }
    });
    gulp.watch(["dist/**/*", "doc/luckcss.html"]).on("change", browserSync.reload);
});

gulp.task('less', function () {
    return gulp.src('./less/test.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['iOS 7', 'Android >= 4.0', '> 1%']
        }))
        .pipe(gulp.dest('./dist/'));
});
