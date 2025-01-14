const { watch, series, src, dest } = require("gulp");
var concat = require("gulp-concat");
var browserSync = require("browser-sync").create();
var postcss = require("gulp-postcss");
// var svgcss = require("gulp-svg-css");
// var svgmin = require("gulp-svgmin");

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

// Example outputting svgs to css - decided not to use anymore
// function svgCIBTask(cb) {
//   return src("./src/assets/svg/core-ui-brand/*.svg")
//     .pipe(svgmin())
//     .pipe(
//       svgcss({
//         fileName: "cib-icons",
//         cssPrefix: "cib-",
//         addSize: false,
//       })
//     )
//     .pipe(dest("./src/css"))
//     .pipe(dest("dist/css"));
//   cb();
// }

// Use to optomize svgs once off not part of build process
// Removes dimensions and adds wh-x class and fill currentcolor
// Icons added to iconjar
// const plugins = [
//   {
//     addClassesToSVGElement: {
//       className: "wh-6",
//     },
//   },
//   {
//     addAttributesToSVGElement: {
//       attributes: [{ fill: "currentColor" }],
//     },
//   },
//   {
//     removeDimensions: true,
//   },
//   { removeAttrs: { attrs: "data-name" } },
// ];

// function svgZWTask(cb) {
//   return src("./src/assets/svg/zwicons/**/*.svg")
//     .pipe(
//       svgmin({
//         plugins,
//       })
//     )

//     .pipe(dest("./src/assets/svg/optimized/zw-icons"));
//   cb();
// }

// function svgCIBTask(cb) {
//   return src("./src/assets/svg/core-ui-brand/*.svg")
//     .pipe(
//       svgmin({
//         plugins,
//       })
//     )
//     .pipe(dest("./src/assets/svg/optimized/core-ui-brand"));
//   cb();
// }

// function svgUniconsTask(cb) {
//   return src("./src/assets/svg/unicons-line/*.svg")
//     .pipe(
//       svgmin({
//         plugins,
//       })
//     )
//     .pipe(dest("./src/assets/svg/optimized/unicons-line"));
//   cb();
// }

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
  watch("./**/*.html", browsersyncReload);
  watch(["./src/*.css"], series(cssTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(cssTask, browsersyncServe, watchTask);
exports.css = cssTask;
exports.htmlTask = htmlTask;
// exports.svgZw = svgZWTask;
// exports.svgCib = svgCIBTask;
// exports.svgUnicons = svgUniconsTask;
