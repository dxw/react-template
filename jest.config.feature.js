/* eslint-env node */
const babelConfig = require("./babel.config");

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  setupFilesAfterEnv: [
    "jest-axe/extend-expect",
    "<rootDir>/__tests__/jest.setup.ts",
    "<rootDir>/__tests__/jest.setup.feature.ts"
  ],
  testMatch: [
    "<rootDir>/__tests__/features/**/?(*.)+(spec|steps|test).[jt]s?(x)"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/__tests__/tsconfig.json",
      babelConfig
    }
  }
};
