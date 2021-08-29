module.exports = {
	'*.{js,ts,tsx}': ['eslint'],
	'*.+(js|jsx|json|yml|yaml|css|less|css|scss |ts|tsx| md|graphql|mdx)': [
		'prettier --write',
	],
}
