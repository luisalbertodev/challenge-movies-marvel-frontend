const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
};

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/destructuring-assignment': RULES.OFF,
    'react/require-default-props': RULES.OFF,
    'no-use-before-define': RULES.OFF,
    'import/extensions': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'import/prefer-default-export': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'arrow-body-style': RULES.OFF,
    'react/jsx-wrap-multilines': RULES.OFF,
    'no-unused-expressions': RULES.OFF,
    'jsx-a11y/no-static-element-interactions': RULES.OFF,
    'jsx-a11y/click-events-have-key-events': RULES.OFF,
    'no-underscore-dangle': RULES.OFF,
    'no-unused-vars': RULES.OFF,
    'no-console': RULES.OFF,
    'jsx-a11y/anchor-is-valid': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'jsx-a11y/label-has-associated-control': RULES.OFF,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }]
  }
};
