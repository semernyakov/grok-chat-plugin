module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    plugins: ['@typescript-eslint', 'react', 'react-hooks'],
    env: {
        browser: true,
        node: true,
        jest: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
}; 