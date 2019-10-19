/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: ["jest-axe/extend-expect", "<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|steps|test).[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/tests/features/"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
