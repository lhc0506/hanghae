module.exports = {
  root: true,
  env: {node: true, browser: true, es2020: true, jest: true},
  extends: ['eslint:recommended', 'eslint-config-prettier', 'react-app', 'plugin:react/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
};
