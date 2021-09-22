import { useSiteMetadata } from 'hooks'
import React from 'react'
import { Helmet } from 'react-helmet'
import Facebook from './facebook'
import Twitter from './twitter'

interface ISeoProps {
	description?: string | null
	title?: string | null
	image?: string | null | any
	isArticle?: boolean
	pathname?: string | null
	datePublished?: string | null
	dateModified?: string | null
	twitterType?: 'summary_large_image' | 'summary'
}

export default function SEO({
	title = null,
	description = null,
	image = null,
	isArticle = false,
	pathname = null,
	datePublished = null,
	dateModified = null,
	twitterType = 'summary',
}: ISeoProps) {
	const siteMetadata = useSiteMetadata()

	// const slugWithoutSlashes = () => (isPost ? slug?.replace(/\//g, '') : slug)
	// const twitterCard = isPost ? 'summary_large_image' : 'summary'

	const seo = {
		title: title || siteMetadata.title,
		description: description || siteMetadata.description,
		image: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
		url: `${siteMetadata.siteUrl}/${pathname || ''}`,
	}

	const schemaOrgWebPage = {
		'@context': 'http://schema.org',
		'@type': 'WebPage',
		url: siteMetadata.siteUrl,
		inLanguage: siteMetadata.siteLanguage,
		mainEntityOfPage: siteMetadata.siteUrl,
		description: siteMetadata.description,
		name: siteMetadata.title,
		author: {
			'@type': 'Person',
			name: siteMetadata.author.name,
		},
		copyrightHolder: {
			'@type': 'Person',
			name: siteMetadata.author.name,
		},
		copyrightYear: '2021',
		creator: {
			'@type': 'Person',
			name: siteMetadata.author.name,
		},
		publisher: {
			'@type': 'Person',
			name: siteMetadata.author.name,
		},
		datePublished: '2021-08-30T10:30:00+01:00',
		image: {
			'@type': 'ImageObject',
			url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
		},
	}

	const itemListElement = [
		{
			'@type': 'ListItem',
			item: {
				'@id': siteMetadata.siteUrl,
				name: 'Homepage',
			},
			position: 1,
		},
	]

	let schemaArticle = null

	if (isArticle) {
		schemaArticle = {
			'@context': 'http://schema.org',
			'@type': 'Article',
			author: {
				'@type': 'Person',
				name: siteMetadata.author.name,
			},
			copyrightHolder: {
				'@type': 'Person',
				name: siteMetadata.author.name,
			},
			copyrightYear: '2021',
			creator: {
				'@type': 'Person',
				name: siteMetadata.author.name,
			},
			publisher: {
				'@type': 'Organization',
				name: siteMetadata.author.name,
				logo: {
					'@type': 'ImageObject',
					url: `${siteMetadata.siteUrl}${siteMetadata.image}`,
				},
			},
			datePublished,
			dateModified,
			description: seo.description,
			headline: seo.title,
			inLanguage: siteMetadata.siteLanguage,
			url: seo.url,
			name: seo.title,
			image: {
				'@type': 'ImageObject',
				url: seo.image,
			},
			mainEntityOfPage: seo.url,
		}

		itemListElement.push({
			'@type': 'ListItem',
			item: {
				'@id': seo.url,
				name: seo.title,
			},
			position: 2,
		})
	}

	const breadcrumb = {
		'@context': 'http://schema.org',
		'@type': 'BreadcrumbList',
		description: 'Breadcrumbs list',
		name: 'Breadcrumbs',
		itemListElement,
	}

	return (
		<>
			<Helmet titleTemplate={`%s - ${siteMetadata.title}`} title={seo.title}>
				<html lang={siteMetadata.siteLanguage} />
				<meta name='description' content={seo.description} />
				<meta name='image' content={seo.image} />
				{!isArticle && (
					<script type='application/ld+json'>
						{JSON.stringify(schemaOrgWebPage)}
					</script>
				)}
				{isArticle && (
					<script type='application/ld+json'>
						{JSON.stringify(schemaArticle)}
					</script>
				)}
				{/* <link rel='icon' href={favicon} /> */}
				<script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
			</Helmet>

			<Facebook
				description={seo.description}
				image={seo.image}
				title={seo.title}
				type={isArticle ? 'article' : 'website'}
				url={seo.url}
				locale={siteMetadata.ogLanguage}
			/>
			<Twitter
				type={twitterType}
				title={seo.title}
				image={seo.image}
				description={seo.description}
				handle={siteMetadata.social.twitter.handle}
			/>
		</>
	)
}
