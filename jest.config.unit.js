/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: ["jest-axe/extend-expect", "<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/tests/features/"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
