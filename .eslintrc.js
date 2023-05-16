module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    // parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: ['./tsconfig.json'],
    },

    plugins: ['react', 'i18next'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
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
        'i18next/no-literal-string': [
            'warn',
            {
                markupOnly: true,
                ignoreAttribute: ['to', 'data-testid'],
            },
        ],
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 120,
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx,js,jsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
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
