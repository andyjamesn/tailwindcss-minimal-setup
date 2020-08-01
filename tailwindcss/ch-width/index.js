const _ = require("lodash");

module.exports = function (options) {
  const { addComponents, theme, e } = options;

  addComponents([
    {
      ".max-w-ch-10": {
        "max-width": "10ch",
      },
      ".max-w-ch-20": {
        "max-width": "20ch",
      },
      ".max-w-ch-30": {
        "max-width": "30ch",
      },
      ".max-w-ch-40": {
        "max-width": "40ch",
      },
      ".max-w-ch-50": {
        "max-width": "50ch",
      },
      ".max-w-ch-60": {
        "max-width": "60ch",
      },
      ".max-w-ch-70": {
        "max-width": "70ch",
      },
      ".max-w-ch-80": {
        "max-width": "80ch",
      },
      //   ".moo": {
      //     ...theme("spacing"),
      //   },
    },
  ]);
};
