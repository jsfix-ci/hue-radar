export default {
  roots: [
    '<rootDir>/src'
  ],
  'testMatch': [
    '**/__tests__/**/*.+(ts|js)"',
    '**/?(*.)+(spec|test).+(ts|js)'
  ],
  'transform': {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  //  TODO: once coverage is up, we can use this to ensure that coverage never drops below these thresholds:
  // "coverageThreshold": {
  //   "global": {
  //     "branches": 90,
  //     "functions": 95,
  //     "lines": 95,
  //     "statements": 95
  //   }
  // },
  "collectCoverageFrom": [
    "src/**/**.ts"
  ]
}
