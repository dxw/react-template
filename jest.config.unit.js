/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: [
    "jest-axe/extend-expect",
    "<rootDir>/__tests__/jest.setup.ts"
  ],
  moduleNameMapper: {
    "^.+\\.css$": "<rootDir>/__tests__/helpers/transformers/fileTransformer"
  },
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testMatch: ["<rootDir>/__tests__/**/?(*.)+(spec|steps|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/features/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
