/* eslint-env node */
const baseConfig = require("./.eslintrc");

const addMissingRecommendedTypeScriptRules = overrides => {
  const overrideIndex = overrides.findIndex(
    ({ files }) =>
      JSON.stringify(files) == JSON.stringify(["**/*.ts", "**/*.tsx"])
  );

  if (overrideIndex === -1) {
    return;
  }

  const override = overrides[overrideIndex];
  const extendsInsertIndex =
    1 +
    override.extends.findIndex(
      extend => extend === "plugin:@typescript-eslint/recommended"
    );

  if (extendsInsertIndex === 0) {
    return;
  }

  overrides[overrideIndex] = {
    ...override,
    extends: [
      ...override.extends.slice(0, extendsInsertIndex),
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ...override.extends.slice(extendsInsertIndex)
    ]
  };
};

const overrides = [...baseConfig.overrides];

addMissingRecommendedTypeScriptRules(overrides);

module.exports = {
  extends: ["./.eslintrc.js"],
  overrides: overrides
};
