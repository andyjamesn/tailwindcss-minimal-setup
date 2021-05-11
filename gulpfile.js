const { watch, series, src, dest } = require("gulp");
var concat = require("gulp-concat");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");

// Task for compiling our CSS files using PostCSS
function cssTask(cb) {
  return src("./src/css/tailwind-entry.css") // read .css files from ./src/ folder
    .pipe(postcss()) // compile using postcss
    .pipe(concat("tailwind.css"))
    .pipe(dest("./dist/css")) // paste them in ./dist/css folder
    .pipe(dest("./src/css")) // paste them in ./dist/css folder
    .pipe(browserSync.stream());
  cb();
}

function htmlTask(cb) {
  return src("./src/index.html") // read .css files from ./src/ folder
    .pipe(dest("./dist")); // paste them in ./dist/css folder
  cb();
}

function browsersyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browserSync.reload();
  cb();
}

// Watch Files & Reload browser after tasks
function watchTask() {
  watch(".src/*.html", browsersyncReload);
  watch([".src/*.css"], series(cssTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(cssTask, htmlTask, browsersyncServe, watchTask);
exports.css = cssTask;
exports.html = htmlTask;
