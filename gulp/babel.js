"use strict"
var gulp = require("gulp");
var sass = require('gulp-babel')

module.exports = function () {
    return gulp.src('script/app.js')
        .pipe(babel())
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(gulp.dest('dist'));
};
