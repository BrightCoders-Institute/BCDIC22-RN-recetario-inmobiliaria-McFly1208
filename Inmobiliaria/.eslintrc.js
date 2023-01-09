module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'error',
      },
      plugins: ['prettier'],
    },
  ],
};
