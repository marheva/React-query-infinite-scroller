module.exports = {
  clearMocks: true,
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(js|tsx|ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testPathIgnorePatterns: ["<rootDir>/(node_modules|.vscode)"],
  collectCoverageFrom: ["src/components/**/*.{js,jsx,ts,tsx}"],
  collectCoverage: true,
  snapshotSerializers: ["./node_modules/enzyme-to-json/serializer"],
  //   moduleNameMapper: {
  //     "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/__mocks__/fileMock.js",
  //     "\\.(css|scss)$": "identity-obj-proxy",
  //   },
};
