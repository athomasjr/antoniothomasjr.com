const path = require('path')
require('dotenv').config({
	path: './.env',
})

const siteMetadata = {
	title: 'Antonio Thomas',
	// description: '',
	siteUrl: 'https://www.antoniothomasjr.com',
	// keywords: '',
	author: {
		name: 'Antonio Thomas',
		summary: 'who lives in Fitchburg Wisconsin as a frontend developer.',
	},
	// social: {},
}

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
