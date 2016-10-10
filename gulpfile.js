/**
 * Created by aaron on 2016/5/18.
 */

var gulp = require("gulp");
var clean = require("gulp-clean");
var sass = require('gulp-sass');
var sequence = require('gulp-sequence');
var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");

gulp.task('clean', function () {
    return gulp.src('dist/')
        .pipe(clean());
});

gulp.task('luck', function () {
    return gulp.src('./sass/luck.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename("luck.wxss"))
        //.pipe(autoprefixer({browsers: ['iOS 7', 'Android >= 4.0', '> 1%']}))
        .pipe(gulp.dest('./dist/'));
});

