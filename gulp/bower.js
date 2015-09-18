"use strict"
var gulp = require("gulp");

module.exports = function(){
    gulp.src('./bower_components/jquery/dist/**').pipe(gulp.dest("public/lib/jquery"));
    gulp.src('./bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*').pipe(gulp.dest("public/lib/bootstrap-font/"));
}