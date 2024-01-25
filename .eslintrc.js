module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  ignorePatterns: ['dist', '.eslintrc.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  overrides: [
    {
      files: ['**/*.{j,t}s?(x)'],
      extends: [
        'plugin:@mjsdo/common',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
    },
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@mjsdo/typescript'],
    },
    {
      files: ['**/*.{cy|e2e}.{js,jsx,ts,tsx}'],
      extends: ['plugin:cypress/recommended'],
      env: {
        'cypress/globals': true,
      },
      rules: {
        'cypress/unsafe-to-chain-command': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  extends: ['plugin:storybook/recommended'],
};
