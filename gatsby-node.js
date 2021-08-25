const ignoreOrder = require('./config/webpack/ignore-order.js')

exports.onCreateWebpackConfig = gatsbyConfig => {
	ignoreOrder(gatsbyConfig)
}
