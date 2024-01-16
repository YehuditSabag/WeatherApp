module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'prettier',
    ],
    plugins: ['import', '@babel', 'prettier'],
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        requireConfigFile: 'false',
        babelOptions: { configFile: './Backend/babel.config.js' },
    },
    settings: {
        'import/resolver': {
            'babel-module': { allowExistingDirectories: true },
        },
    },
    rules: {
        semi: ['error', 'never'],
        'comma-dangle': [2, 'never'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'no-use-before-define': [
          'error',
          { functions: true, classes: true, variables: false }
        ]
      }
}