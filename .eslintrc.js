module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    overrides: [],
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: ['./tsconfig.json'],
    },
    plugins: ['react'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'comma-dangle': ['warn', 'never'],
        semi: ['warn', 'never'],
    },
    globals: {
        __IS_DEV__: true,
    },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//   },
//   extends: ['plugin:react/recommended', 'airbnb'],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react', '@typescript-eslint'],
//   rules: {
//     // quotes: ["error", "double"],
//     'react/jsx-indent': [2, 4],
//     // 'react/jsx-indent-props': [2, 4],
//     // indent: [2, 4],
//     'react/jsx-filename-extension': [
//       2,
//       { extensions: ['.js', '.jsx', '.tsx'] },
//     ],
//     'import/no-unresolved': 'off',
//     'linebreak-style': [
//       'error',
//       process.platform === 'win32' ? 'windows' : 'unix',
//     ],
//   },
// };
