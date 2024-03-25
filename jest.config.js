const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFiles: ['./jest.polyfills.js'],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  "testMatch": [
    "<rootDir>/__tests__/**/*.{ts,tsx,mjs}",
    "<rootDir>/**/*?(*.)(spec|test).{ts,tsx,mjs}"
  ],
  moduleNameMapper: {
    "swiper/css": "swiper/swiper.min.css",
    "swiper/css/autoplay": "swiper/modules/autoplay/autoplay.min.css",
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components(.*)$': '<rootDir>/components$1',
    '^@/pages(.*)$': '<rootDir>/pages$1',
    '^@/layouts(.*)$': '<rootDir>/layouts$1',
    '^@/styles(.*)$': '<rootDir>/styles$1',
    '^@/utils(.*)$': '<rootDir>/utils$1',
    '^@/API(.*)$': '<rootDir>/API$1',
    '^@/hooks(.*)$': '<rootDir>/hooks$1',
    '^@/scripts(.*)$': '<rootDir>/scripts$1',
    '^@/__mocks__(.*)$': '<rootDir>/__mocks__$1',
    '^@/tests(.*)$': '<rootDir>/tests$1',
    '^utils(.*)$': '<rootDir>/utils$1',
    '^scripts(.*)$': '<rootDir>/scripts$1',
    '^__mocks__(.*)$': '<rootDir>/__mocks__$1',
    '^tests(.*)$': '<rootDir>/tests$1',
    '^components(.*)$': '<rootDir>/components$1',
    '^layouts(.*)$': '<rootDir>/layouts$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)