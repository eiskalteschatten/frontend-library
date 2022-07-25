module.exports = {
  'env': {
    'es6': true,
    'node': true,
    'browser': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
    'promise',
    'import',
  ],
  'rules': {
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-console': 'off',
    'no-case-declarations': 'off',
    'prefer-const': ['error'],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': 'off',
    'no-async-promise-executor': 'off',
    'promise/catch-or-return': 'error',
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',
    'no-restricted-globals': 'off',
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never',
    }],
    'import/no-anonymous-default-export': 'off',
    'jsx-a11y/alt-text': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'import/first': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'no-public' }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'SwitchCase': 1,
        'ignoredNodes': [
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key',
        ],
      },
    ],
  },
  'overrides': [{
    'files': ['*.json'],
    'rules': {
      'quotes': ['error', 'double'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      'no-unused-expressions': 'off',
      '@typescript-eslint/semi': ['off'],
    },
  },
  {
    'files': ['*.js'],
    'rules': {
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  }],
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};
