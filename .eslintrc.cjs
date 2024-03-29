const stylistic = require('@stylistic/eslint-plugin');

const customized = stylistic.configs.customize({
  flat: false,
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: false,
});

/** @type {import('eslint').Linter.Config'} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@stylistic', 'simple-import-sort', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {allowConstantExport: true},
    ],

    ...customized.rules,
    '@stylistic/jsx-curly-brace-presence': ['error', 'always'],'simple-import-sort/exports': 'error',

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^next', '@?\\w'],
          ['^~/.*'],
          ['^@/.*'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],

    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
    },
  },
};