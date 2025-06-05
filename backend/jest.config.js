const baseConfig = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFiles: ['<rootDir>/jest.setup.js']
};

module.exports = {
    projects: [
        {
            ...baseConfig,
            displayName: 'unit',
            testMatch: ['<rootDir>/src/__tests__/unit/**/*.unit.ts'],
            coverageDirectory: 'coverage/unit',
            collectCoverageFrom: [
                'src/**/*.{ts,tsx}',
                '!src/**/*.d.ts',
                '!src/__tests__/**'
            ]
        },
        {
            ...baseConfig,
            displayName: 'e2e',
            testMatch: ['<rootDir>/src/__tests__/e2e/**/*.e2e.ts'],
            coverageDirectory: 'coverage/e2e',
            collectCoverageFrom: [
                'src/**/*.{ts,tsx}',
                '!src/**/*.d.ts',
                '!src/__tests__/**'
            ]
        }
    ]
};