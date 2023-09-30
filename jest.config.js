const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  "testMatch": [
    "<rootDir>/__tests__/**/*.{ts,tsx,mjs}",
    "<rootDir>/**/*?(*.)(spec|test).{ts,tsx,mjs}"
  ],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/layouts(.*)$': '<rootDir>/layouts$1',
    '^@/styles(.*)$': '<rootDir>/styles$1',
    '^@/utils(.*)$': '<rootDir>/utils$1',
    '^@/API(.*)$': '<rootDir>/API$1',
    '^@/hooks(.*)$': '<rootDir>/hooks$1',
    '^@/scripts(.*)$': '<rootDir>/scripts$1',
    '^utils(.*)$': '<rootDir>/utils$1',
    '^scripts(.*)$': '<rootDir>/scripts$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)