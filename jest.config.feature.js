/* eslint-env node */
module.exports = {
  setupFilesAfterEnv: [
    "jest-axe/extend-expect",
    "<rootDir>/jest.setup.ts",
    "<rootDir>/jest.setup.feature.ts"
  ],
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testMatch: [
    "<rootDir>/tests/features/**/*.{spec,steps,test}.{js,jsx,ts,tsx}"
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
