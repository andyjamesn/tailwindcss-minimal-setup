//Dependencias
var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprite");

//Configuração do Sprite
var config = {
  mode: {
    symbol: {
      dest: "dist/assets/sprite",
      sprite: "sprite.svg",
      example: true,
    },
    svg: {
      xmlDeclaration: false,
      doctypeDeclaration: false,
    },
  },
};

gulp.task("sprites", function () {
  return gulp
    .src("assets/svg-icons/**/*.svg")
    .pipe(svgSprite(config))
    .pipe(gulp.dest("."));
});
