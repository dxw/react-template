/* eslint-env node */
const babelConfig = require("./babel.config");

module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  setupFilesAfterEnv: [
    "jest-axe/extend-expect",
    "<rootDir>/__tests__/jest.setup.ts"
  ],
  moduleNameMapper: {
    "^.+\\.css$": "<rootDir>/__tests__/helpers/transformers/fileTransformer"
  },
  testMatch: ["<rootDir>/__tests__/**/?(*.)+(spec|steps|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/features/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/tsconfig.jest.json",
      babelConfig
    }
  }
};
