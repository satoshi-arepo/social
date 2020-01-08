const {src, dest, series, parallel, watch} = require("gulp");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-terser");
const ngAnnotate = require("gulp-ng-annotate");
const nodemon = require("gulp-nodemon");

function js (cb) {
	src(["ng/module.js", "ng/**/*.js"])
		.pipe(sourcemaps.init())
			.pipe(concat("app.js"))
			.pipe(ngAnnotate())
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(dest("assets"))
}

function server () {
	nodemon({
		script: "server.js",
		ext:	"js",
		ignore: ["ng*", "gulp*", "assets*"]
	});
}

exports.js = js

function watchjs () {
	watch("ng/**/*.js", js);
}

exports.watchjs = watchjs
exports.server = server 

exports.default = function(cb) {
	watchjs();
	server();
	cb();
}
//comment
