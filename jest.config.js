const { transform } = require("typescript");

module.export = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statements: 70
        }
    },
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '<rootDir>/**/*.types.ts',
    ],
}