module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:prettier/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  globals: {
    fetch: true,
    window: true,
    document: true,
  },
  plugins: ['import', 'html', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        bracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 120,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        endOfLine: 'lf',
      },
    ],

    'no-console': 'error',
    'no-unused-vars': 'error',
    'no-undef': 'error',
    strict: ['error', 'global'],
    'consistent-return': 'error',
    'no-else-return': 'error',
    'no-use-before-define': 'error',
    'prefer-const': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    eqeqeq: 'error',

    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [['builtin'], ['external'], ['parent', 'internal', 'sibling', 'index', 'unknown']],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/newline-after-import': ['error', { count: 1 }],
  },
};
