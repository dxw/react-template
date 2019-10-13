/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts",
    "<rootDir>/jest.setup.feature.ts"
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testMatch: ["<rootDir>/tests/features/**/*.{js,jsx,ts,tsx}"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
