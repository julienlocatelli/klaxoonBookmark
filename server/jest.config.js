module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/src/**/*.spec.(ts|js)'],
  testEnvironment: 'node'
};
