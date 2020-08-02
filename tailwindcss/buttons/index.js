const _ = require("lodash");
const Color = require("color");
const { transparent } = require("../extend/colors");

module.exports = function (options) {
  const { addComponents, theme, e } = options;
  const colors = theme("colors");

  addComponents([
    {
      ".btn": {
        "@apply relative inline-block w-auto px-4 py-3 overflow-hidden text-center text-base duration-300 ease-in-out transform bg-gray-100 border border-transparent rounded cursor-pointer leading-normal": {},
        "&:focus": {
          "@apply shadow-outline outline-none": {},
        },
        "&:active": {
          "@apply scale-95 shadow-none outline-none": {},
        },
      },
    },
    {
      ".btn-sm": {
        "@apply px-3 py-2 text-sm": {},
      },
      ".btn-xs": {
        "@apply px-2 py-1 text-xs": {},
      },
      ".btn-lg": {
        "@apply px-5 py-4 text-lg": {},
      },
      ".btn-xl": {
        "@apply px-6 py-5 text-lg": {},
      },
      // Icons
      ".btn-icon": {
        "@apply inline-flex items-center": {},
      },
      ".btn-icon.btn-xs svg": {
        "@apply wh-4": {},
      },
      ".btn-icon.btn-sm svg": {
        "@apply wh-4": {},
      },
      ".btn-icon svg": {
        "@apply wh-5": {},
      },
      ".btn-icon.btn-lg svg": {
        "@apply wh-6": {},
      },
      ".btn-icon.btn-xl svg": {
        "@apply wh-8": {},
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

      let softBgColor = "";
      if (_.isObject(colorOptions)) {
        softBgColor = colorOptions[50];
      } else {
        softBgColor = colorOptions;
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
        [`.btn-outline-${e(name)}`]: {
          color: bgColor,
          borderColor: bgColor,
          backgroundColor: "transparent",
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(textColor)
              .alpha(0.5)
              .rgb()
              .toString()}`,
          },
          "&:hover": {
            color: textColor,
            backgroundColor: _.get(
              colorOptions,
              "hoverBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
          "&:active": {
            color: textColor,
            backgroundColor: _.get(
              colorOptions,
              "activeBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
        },
        [`.btn-${e(name)}-soft`]: {
          color: bgColor,
          backgroundColor: softBgColor,
          "&:focus": {
            outline: 0,
            boxShadow: `0 0 0 .2em ${Color(bgColor)
              .alpha(0.5)
              .rgb()
              .toString()}`,
          },
          "&:hover": {
            color: textColor,
            backgroundColor: _.get(
              colorOptions,
              "hoverBackground",
              Color(bgColor).darken(0.1).hex().toString()
            ),
          },
          "&:active": {
            color: textColor,
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
