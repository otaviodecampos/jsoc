var gulp = require('gulp')
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var settings = require('./settings.json');

module.exports = function () {

    var that = this;
    var sources = that.input(that.buildDir, [settings.concat.filename]);

    return gulp.src(sources)
        .pipe(uglify())
        .pipe(rename(settings.minify.filename))
        .pipe(gulp.dest(that.buildDir));

}
