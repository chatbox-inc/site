"use strict"
var concat = require("gulp-concat");

module.exports = function(){
    this.src('./bower_components/jquery/dist/**')
        .pipe(this.dest("contents/lib/jquery"));
    this.src('./bower_components/bootstrap-sass/assets/fonts/bootstrap/**/*')
        .pipe(this.dest("contents/lib/bootstrap/fonts/"));
    this.src('./bower_components/bootstrap-sass/assets/javascripts/*')
        .pipe(this.dest("contents/lib/bootstrap/js/"));
}