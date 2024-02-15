module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  testMatch: ['**/*test.ts'],
  testPathIgnorePatterns: ['<rootDir>/[/\\\\]node_modules[/\\\\]'],
};
