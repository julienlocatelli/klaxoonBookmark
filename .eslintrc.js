module.exports = {
  env: {
    'shared-node-browser': true,
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'jest'],
  parserOptions: {
    ecmaFeatures: {
      modules: true
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': 2,
    'comma-dangle': [
      1,
      {
        objects: 'never',
        arrays: 'never',
        imports: 'ignore',
        exports: 'ignore',
        functions: 'ignore'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        trailingComma: 'none',
        tabWidth: 2,
        tabs: true,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'always',
        endOfLine: 'auto',
        jsxSingleQuote: false,
        proseWrap: 'preserve',
        quoteProps: 'as-needed'
      }
    ],
    'react/display-name': 0,
    'no-extra-boolean-cast': 0
  }
};
