const path = require('path')
const siteMetadata = require('./config/siteMetadata/index.js')

require('dotenv').config({
	path: './.env',
})

module.exports = {
	siteMetadata,
	plugins: [
		`gatsby-plugin-advanced-sitemap`,
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true,
				allExtensions: true,
			},
		},

		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'page',
				path: `${__dirname}/src/pages`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},

		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				'~': path.join(__dirname, './src'),
				pages: path.join(__dirname, './src/pages'),
				images: path.join(__dirname, './src/images'),
				assets: path.join(__dirname, './src/assets'),
				components: path.join(__dirname, './src/components'),
				types: path.join(__dirname, './src/types'),
				styles: path.join(__dirname, './src/styles'),
				hooks: path.join(__dirname, './src/hooks'),
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
				exclude: /(node_modules|.cache|public)/,
				stages: ['develop'],
				options: {
					emitWarning: true,
					failOnError: false,
					fix: true,
				},
			},
		},

		`gatsby-plugin-sass`,
		'gatsby-plugin-anchor-links',

		`gatsby-plugin-react-helmet`,
	],
	flags: {
		FAST_DEV: true,
		DEV_WEBPACK_CACHE: true,
		PARALLEL_SOURCING: true,
	},
}
