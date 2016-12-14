var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');

gulp.task("default", [], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['github.ts'],
        cache: {},
        packageCache: {}
    })
	.plugin(tsify)
	.transform("babelify")
	.bundle()
	.pipe(source('github.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps: true}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest("."));
});
