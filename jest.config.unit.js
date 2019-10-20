/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: [
    "jest-axe/extend-expect",
    "<rootDir>/tests/jest.setup.ts"
  ],
  moduleNameMapper: {
    "^.+\\.css$": "<rootDir>/tests/helpers/transformers/fileTransformer"
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testMatch: ["<rootDir>/tests/**/?(*.)+(spec|steps|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/tests/features/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
