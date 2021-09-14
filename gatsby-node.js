const ignoreOrder = require('./gatsby/webpack/ignore-order.js')

exports.onCreateWebpackConfig = gatsbyConfig => {
	ignoreOrder(gatsbyConfig)
}
