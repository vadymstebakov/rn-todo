module.exports = {
    env: {
        browser: true,
        es2021: true,
        'react-native/react-native': true,
    },
    ignorePatterns: ['node_modules/'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'react-native', 'prettier'],
    globals: {
        module: true,
        fetch: false,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'prettier/prettier': ['error'],
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': ['off'],
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
};
