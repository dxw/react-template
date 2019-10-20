/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: [
    "jest-axe/extend-expect",
    "<rootDir>/__tests__/jest.setup.ts",
    "<rootDir>/__tests__/jest.setup.feature.ts"
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testMatch: [
    "<rootDir>/__tests__/features/**/?(*.)+(spec|steps|test).[jt]s?(x)"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
