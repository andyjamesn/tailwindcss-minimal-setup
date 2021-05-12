const plugin = require("tailwindcss/plugin");

// Plugins
const buttons = require("../buttons");
const shapes = require("../shapes");
const chWidth = require("../ch-width");

// Used to set width-x instead of w- as webflow changes w-x to _w-
const widths = require("../widths");

const width = (theme) => ({
  auto: "auto",
  ...theme("spacing"),
  "1-2": "50%",
  "1-3": "33.333333%",
  "2-3": "66.666667%",
  "1-4": "25%",
  "2-4": "50%",
  "3-4": "75%",
  "1-5": "20%",
  "2-5": "40%",
  "3-5": "60%",
  "4-5": "80%",
  "1-6": "16.666667%",
  "2-6": "33.333333%",
  "3-6": "50%",
  "4-6": "66.666667%",
  "5-6": "83.333333%",
  "1-12": "8.333333%",
  "2-12": "16.666667%",
  "3-12": "25%",
  "4-12": "33.333333%",
  "5-12": "41.666667%",
  "6-12": "50%",
  "7-12": "58.333333%",
  "8-12": "66.666667%",
  "9-12": "75%",
  "10-12": "83.333333%",
  "11-12": "91.666667%",
  full: "100%",
  screen: "100vw",
  min: "min-content",
  max: "max-content",
});

const height = (theme) => ({
  auto: "auto",
  ...theme("spacing"),
  "1-2": "50%",
  "1-3": "33.333333%",
  "2-3": "66.666667%",
  "1-4": "25%",
  "2-4": "50%",
  "3-4": "75%",
  "1-5": "20%",
  "2-5": "40%",
  "3-5": "60%",
  "4-5": "80%",
  "1-6": "16.666667%",
  "2-6": "33.333333%",
  "3-6": "50%",
  "4-6": "66.666667%",
  "5-6": "83.333333%",
  full: "100%",
  screen: "100vh",
});

const inset = (theme, { negative }) => ({
  auto: "auto",
  ...theme("spacing"),
  ...negative(theme("spacing")),
  "1-2": "50%",
  "1-3": "33.333333%",
  "2-3": "66.666667%",
  "1-4": "25%",
  "2-4": "50%",
  "3-4": "75%",
  full: "100%",
  "-1-2": "-50%",
  "-1-3": "-33.333333%",
  "-2-3": "-66.666667%",
  "-1-4": "-25%",
  "-2-4": "-50%",
  "-3-4": "-75%",
  "-full": "-100%",
});

const translate = (theme, { negative }) => ({
  ...theme("spacing"),
  ...negative(theme("spacing")),
  "1-2": "50%",
  "1-3": "33.333333%",
  "2-3": "66.666667%",
  "1-4": "25%",
  "2-4": "50%",
  "3-4": "75%",
  full: "100%",
  "-1-2": "-50%",
  "-1-3": "-33.333333%",
  "-2-3": "-66.666667%",
  "-1-4": "-25%",
  "-2-4": "-50%",
  "-3-4": "-75%",
  "-full": "-100%",
});

module.exports = plugin.withOptions(
  function () {
    return function (options) {
      buttons(options);
      shapes(options);
      chWidth(options);

      // Used to set width-x instead of w- as webflow changes w-x to _w-
      widths(options);
    };
  },

  // The below is ONLY needed to change 1/2 to 1-2 so it works in Webflow!
  function () {
    return {
      theme: {
        width,
        height,
        inset,
        translate,
      },
    };
  }
);
