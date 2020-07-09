module.exports = {
  roots: ["./src"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleFileExtensions: ["ts", "tsx", "js"],
  testPathIgnorePatterns: ["node_modules/"],
  testMatch: ["**/*.test.(ts|tsx)"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
