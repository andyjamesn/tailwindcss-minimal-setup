const _ = require("lodash");
const Color = require("color");

module.exports = function (options) {
  const { addComponents, theme, e } = options;
  const colors = theme("colors");

  addComponents([
    {
      ".btn": {
        "@apply relative inline-block w-auto px-4 py-3 overflow-hidden text-center duration-300 ease-in-out transform bg-gray-100 border border-transparent rounded cursor-pointer leading-normal": {},
        "&:focus": {
          "@apply shadow-outline outline-none": {},
        },
        "&:active": {
          "@apply scale-95 shadow-none outline-none": {},
        },
      },
    },
    ..._.map(colors, (colorOptions, name) => {
      console.log("colorOptions.text", colorOptions[100]);

      let bgColor = "";
      if (_.isObject(colorOptions)) {
        bgColor = colorOptions[500];
      } else {
        bgColor = colorOptions;
      }

      let textColor = "";
      if (_.isObject(colorOptions)) {
        textColor = colorOptions[100];
      } else {
        textColor = colorOptions;
      }

      return {
        [`.btn-${e(name)}`]: {
          backgroundColor: bgColor,
          color: textColor,
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(bgColor)
              .alpha(0.5)
              .rgb()
              .toString()}`,
          },
          "&:hover": {
            backgroundColor: _.get(
              colorOptions,
              "hoverBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
          "&:active": {
            backgroundColor: _.get(
              colorOptions,
              "activeBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
        },
      };
    }),
  ]);
};
