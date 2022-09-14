// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  rootDir: '.',
  collectCoverageFrom: [
    'src/**/*.{js,ts,jsx,tsx}',
    'shared/**/*.{js,ts,jsx,tsx}',
    'pages/**/*.{js,ts,jsx,tsx}'
  ],
  transform: {
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.svg': 'jest-transformer-svg',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  // collectCoverage: true,
  // coverageReporters:  ['html', 'json-summary']
}

module.exports = createJestConfig(customJestConfig)
