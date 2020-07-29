const _ = require("lodash");

module.exports = function ({ addComponents, e, theme, variants }) {
  console.log("theme", theme);

  const utilities = _.map(theme("gradients", {}), (gradient, name) => {
    const type =
      _.isPlainObject(gradient) && gradient.hasOwnProperty("type")
        ? gradient.type
        : "linear";
    const colors = _.isPlainObject(gradient) ? gradient.colors || [] : gradient;

    return {
      [`.bg-${e(name)}`]: {
        backgroundImage: `${type}-gradient(${colors.join(", ")})`,
      },
    };
  });

  addComponents(utilities, variants("gradients", []));
};
