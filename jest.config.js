module.exports = {
  /** @link https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths */
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__tests__/__mocks__/styleMock.js",
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  roots: ["<rootDir>/"],
  testEnvironment: "jsdom",
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/src/__tests__/utils.tsx",
    "<rootDir>/__tests__/__mocks__/",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
