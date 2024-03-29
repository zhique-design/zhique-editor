module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    '@typescript-eslint/no-var-requires': [0],
    'react/function-component-definition': [0],
    'react/jsx-props-no-spreading': [0],
    'react/require-default-props': [0],
    '@typescript-eslint/ban-ts-comment': [0],
    'no-undef': [0],
    'react/static-property-placement': [0],
    'no-unused-vars': [0],
    'react/no-array-index-key': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/mouse-events-have-key-events': [0],
    'no-nested-ternary': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'prettier/prettier': [
      2,
      {
        singleQuote: true,
      },
    ],
    'import/extensions': [
      2,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
      },
    ],
  },
};
