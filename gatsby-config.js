const path = require('path')
require('dotenv').config({ path: './.env' })
const siteMetadata = require('./site/siteMetadata')

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
				path: `${__dirname}/src/images`,
			},
		},

		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog-2021',
				path: `${__dirname}/content/blog/2021/`,
			},
		},
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-mdx`,
		'gatsby-plugin-root-import',

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
					'script-src': `'self' 'unsafe-inline' 'unsafe-eval'  ${process.env.GATSBY_MAILCHIMP_FORM_ACTION_CSP} https://www.googletagmanager.com`,
					'style-src': ` 'self' 'unsafe-inline'`,
					'connect-src': `'self' https://www.google-analytics.com`,
					'img-src': `'self' data:;`,
					'report-to': `${process.env.GATSBY_CSP_REPORT_TO}`,
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
				icon: siteMetadata.favicon,
			},
		},
		// {
		// 	resolve: `gatsby-plugin-google-gtag`,
		// 	options: {
		// 		trackingIds: [`${process.env.GA_TRACKING_ID}`],
		// 		pluginConfig: {
		// 			head: true,
		// 		},
		// 	},
		// },
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-webpack-bundle-analyser-v2`,
		`gatsby-plugin-perf-budgets`,
		`gatsby-plugin-loadable-components-ssr`,
	],
	flags: {
		// FAST_DEV: true,
		// PARALLEL_SOURCING: true,
		// DEV_SSR: true,
	},
}
