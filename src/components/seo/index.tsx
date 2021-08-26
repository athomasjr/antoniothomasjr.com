/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'
import favicon from '../../../favicon.png'
// import { Maybe } from 'types'

interface ISeoProps extends HelmetProps {
	description?: string
	title?: string | undefined
	// slug?: string | Maybe<string>
	isPost?: boolean
}

export default function Seo({
	title,
	description,
	// slug,
	isPost = false,
}: ISeoProps) {
	const { site } = useStaticQuery(query)

	// const slugWithoutSlashes = () => (isPost ? slug?.replace(/\//g, '') : slug)

	const twitterCard = isPost ? 'summary_large_image' : 'summary'

	return (
		<Helmet
			htmlAttributes={{ lang: 'en' }}
			title={title}
			defaultTitle={site?.siteMetadata?.title!}
			titleTemplate={`%s · ${site?.siteMetadata?.title!}`}
			meta={[
				{
					name: 'description',
					content: description || site?.siteMetadata?.description,
				},
				{
					property: `og:title`,
					content: title || site?.siteMetadata?.title!,
				},
				{
					property: 'og:description',
					content: description || site?.siteMetadata?.description!,
				},
				// {
				// 	property: 'og:url',
				// 	content: slug
				// 		? `${site?.siteMetadata?.siteUrl}/${slugWithoutSlashes()}/`
				// 		: site?.siteMetadata?.siteUrl!,
				// },
				{
					name: 'twitter:card',
					content: twitterCard,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: 'twitter:title',
					content: title || site?.siteMetadata?.title,
				},
				{
					name: 'twitter:description',
					content: description || site?.siteMetadata?.description,
				},
				{
					name: `twitter:creator`,
					content: site?.siteMetadata?.social?.twitter,
				},
				{
					name: `twitter:site`,
					content: site?.siteMetadata?.social?.twitter,
				},
			]}
			link={[
				{
					rel: 'shortcut icon',
					type: 'image/png',
					href: `${favicon}`,
				},
			]}
		/>
	)
}

export const query = graphql`
	query SEO {
		site {
			siteMetadata {
				description
				siteUrl
				title
			}
		}
	}
`
