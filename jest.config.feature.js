/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: [
    "jest-axe/extend-expect",
    "<rootDir>/tests/jest.setup.ts",
    "<rootDir>/tests/jest.setup.feature.ts"
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testMatch: ["<rootDir>/tests/features/**/?(*.)+(spec|steps|test).[jt]s?(x)"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
