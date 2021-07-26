module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module',
    'ecmaFeatures': {
      'experimentalObjectRestSpread': true,
      'experimentalDecorators': true,
      'jsx': true,
    },
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
  },
};
