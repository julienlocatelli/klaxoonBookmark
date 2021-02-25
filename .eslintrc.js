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
				parser: 'babel',
				singleQuote: true,
				trailingComma: 'none',
				bracketSpacing: true,
				jsxBracketSameLine: true,
				tabWidth: 2,
				useTabs: true,
				semi: true,
				arrowParens: 'always'
			}
		],
		'react/display-name': 0,
		'no-extra-boolean-cast': 0
	}
};
