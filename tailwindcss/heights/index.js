var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = function ({ addUtilities, e, theme, variants }) {
  const utilities = _lodash.default.fromPairs(
    _lodash.default.map(theme("heights"), (value, modifier) => {
      return [
        `.${e(`height-${modifier}`)}`,
        {
          width: value,
        },
      ];
    })
  );

  addUtilities(utilities, variants("heights"));
};
