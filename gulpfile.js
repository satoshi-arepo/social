const {src, dest, series, watch} = require("gulp");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-terser");
const ngAnnotate = require("gulp-ng-annotate");

function js (cb) {
	src(["ng/module.js", "ng/**/*.js"])
		.pipe(sourcemaps.init())
			.pipe(concat("app.js"))
			.pipe(ngAnnotate())
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(dest("assets"))
	cb();
}

exports.js = js
exports.default = function() {
	watch("ng/**/*.js", js);
}
