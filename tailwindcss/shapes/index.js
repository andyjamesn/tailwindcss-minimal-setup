const _ = require("lodash");

module.exports = function (options) {
  const { addComponents, theme, e } = options;
  const colors = theme("colors");

  addComponents([
    {
      ".shape": {
        "@apply relative inline-block w-auto px-4 py-4 overflow-hidden text-center text-base bg-transparent border border-transparent rounded leading-normal":
          {},
      },
    },
    {
      ".shape-sm": {
        "@apply px-3 py-3 text-sm": {},
      },
      ".shape-3xs": {
        "@apply px-0 py-0 text-2xs": {},
      },
      ".shape-2xs": {
        "@apply px-1 py-1 text-2xs": {},
      },
      ".shape-xs": {
        "@apply px-2 py-2 text-xs": {},
      },
      ".shape-lg": {
        "@apply px-5 py-5 text-lg": {},
      },
      ".shape-xl": {
        "@apply px-6 py-6 text-lg": {},
      },
      // Icons
      ".shape-icon": {
        "@apply inline-flex items-center": {},
      },
      ".shape-icon.shape-xs svg": {
        "@apply w-4 h-4": {},
      },
      ".shape-icon.shape-sm svg": {
        "@apply w-4 h-4": {},
      },
      ".shape-icon svg": {
        "@apply w-5 h-5": {},
      },
      ".shape-icon.shape-lg svg": {
        "@apply w-6 h-6": {},
      },
      ".shape-icon.shape-xl svg": {
        "@apply w-8 h-8": {},
      },
    },
    ..._.map(colors, (colorOptions, name) => {
      if (colorOptions === "transparent") {
        return null;
      }

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
        if (colorOptions === "#ffffff") textColor = "#000000";
        if (colorOptions === "#000000") textColor = "#ffffff";
      }

      return {
        [`.shape-${e(name)}`]: {
          backgroundColor: bgColor,
          color: textColor,
        },
        [`.shape-outline-${e(name)}`]: {
          color: bgColor,
          borderColor: bgColor,
          backgroundColor: "transparent",
        },
        [`.shape-${e(name)}-soft`]: {
          color: bgColor,
          backgroundColor: softBgColor,
        },
      };
    }),
  ]);
};
