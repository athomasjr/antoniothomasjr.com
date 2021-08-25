module.exports = ignoreOrder = ({ stage, actions, getConfig }) => {
	if (stage === 'build-javascript' || stage === 'develop') {
		const config = getConfig()
		const miniCssExtractPlugin = config.plugins.find(
			plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
		)
		if (miniCssExtractPlugin) {
			miniCssExtractPlugin.options.ignoreOrder = true
		}
		actions.replaceWebpackConfig(config)
	}
}
