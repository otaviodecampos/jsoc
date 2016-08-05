var gulp = require('gulp')
var concat = require('gulp-concat');
var order = require("gulp-order");
var settings = require('./settings.json');

module.exports = function () {

    var that = this;
    var sources = that.input(that.srcDir, ['**/*.js']);

    return gulp.src(sources)
        .pipe(order(settings.concat.order))
        .pipe(concat(settings.concat.filename))
        .pipe(gulp.dest(that.buildDir));

}
