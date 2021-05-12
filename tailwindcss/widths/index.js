// Used to set width-x instead of w- as webflow changes w-x to _w-
var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = function ({ addUtilities, e, theme, variants }) {
  console.log("theme", theme);

  console.log("variants", variants);

  const utilities = _lodash.default.fromPairs(
    _lodash.default.map(theme("width"), (value, modifier) => {
      return [
        `.${e(`width-${modifier}`)}`,
        {
          width: value,
        },
      ];
    })
  );

  addUtilities(utilities, variants("width"));
};
