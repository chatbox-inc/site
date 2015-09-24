"use strict"
var babel = require('gulp-babel')
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

module.exports = function () {
    return this.src('script/app.js')
        .pipe(babel())
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(this.dest('contents/assets/js'));
};
