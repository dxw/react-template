module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.(jsx?|tsx?)$",
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"]
};
