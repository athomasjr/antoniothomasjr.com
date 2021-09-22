const path = require('path')
const siteMetadata = require('./site/siteMetadata/index.js')
require('dotenv').config({ path: './.env' })

const {
	NODE_ENV,
	URL: NETLIFY_SITE_URL = siteMetadata.siteUrl,
	DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
	CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
	siteMetadata,
	plugins: [
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				excludes: ['/thanks'],
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{ userAgent: '*' }],
						sitemap: `${siteUrl}/sitemap/sitemap-index.xml`,
					},
					'branch-deploy': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
					'deploy-preview': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null,
					},
				},
			},
		},
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
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog-2021',
				path: `${__dirname}/content/blog/2021`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-mdx`,
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				'~': path.join(__dirname, './src'),
				pages: path.join(__dirname, './src/pages'),
				images: path.join(__dirname, './src/assets/images'),
				assets: path.join(__dirname, './src/assets'),
				components: path.join(__dirname, './src/components'),
				layouts: path.join(__dirname, './src/layouts'),
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
		{
			resolve: 'gatsby-plugin-anchor-links',
			options: {
				offset: -100,
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-react-helmet-canonical-urls`,
			options: {
				siteUrl: siteUrl,
			},
		},
		{
			resolve: `gatsby-plugin-csp`,
			options: {
				mergeScriptHashes: false,
				mergeStyleHashes: false,
				directives: {
					'script-src': ` 'self' 'unsafe-inline' 'unsafe-eval'`,
					'style-src': ` 'self' 'unsafe-inline'`,
					'img-src': `'self' data:;`,
					'report-to': ` https://antonio.report-uri.com/r/d/csp/wizard`,
				},
			},
		},
		{
			resolve: `gatsby-plugin-netlify`,
			options: {
				headers: {
					'/*': ['Content-Security-Policy: __REPLACE_ME__'],
				},
				mergeSecurityHeaders: true,
			},
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: process.env.GATSBY_MAILCHIMP_FORM_ACTION,

				timeout: 3500,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				// icon: 'src/assets/svg/logo.inline.svg',
				icon: siteMetadata.favicon,
			},
		},
	],
	flags: {
		FAST_DEV: true,
		PARALLEL_SOURCING: true,
	},
}
