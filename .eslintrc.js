module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
    // 'eslint-config-alloy/index',
    // 'eslint-config-alloy/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'max-len': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-restricted-globals': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    indent: ['error', 2],
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
  },
};
