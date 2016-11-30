/**
 * Created by aaron on 2016/5/18.
 */

var gulp = require("gulp");
var clean = require("gulp-clean");
//var browserSync = require("browser-sync");
var sass = require('gulp-sass');
var less = require('gulp-less');
var sequence = require('gulp-sequence');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('luck', function () {
    return gulp.src('./luck/luck.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['iOS 7', 'Android >= 4.0', '> 1%']
        }))
        .pipe(gulp.dest('./dist/'));
});
gulp.task('gplqg', function () {
    return gulp.src('./mobile/gplqg.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['iOS 7', 'Android >= 4.0', '> 1%']
        }))
        .pipe(gulp.dest('./dist/'));
});
