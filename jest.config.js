const {resolve} = require('path');
const root = resolve(__dirname);

module.exports = {
    rootDir: root,
    displayName: 'root-tests',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/*.test.ts'],
    clearMocks: true,
    preset: 'ts-jest',
    moduleNameMapper:{
        '^@/(.*)$': '<rootDir>/src/$1',
        '@tests/(.*)': '<rootDir>/test/$1',
    }
}