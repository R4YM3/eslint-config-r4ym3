module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: ['eslint:recommended'],
	globals: {
		process: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
};
