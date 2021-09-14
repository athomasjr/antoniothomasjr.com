import { useSiteMetadata } from 'hooks'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Maybe } from 'types'

interface ISeoProps {
	description?: string
	title?: string | undefined
	slug?: string | Maybe<string>
	image?: string
	isPost?: boolean
}

export default function Seo({
	title,
	description,
	slug,
	image,
	isPost = false,
}: ISeoProps) {
	const siteMetadata = useSiteMetadata()

	const slugWithoutSlashes = () => (isPost ? slug?.replace(/\//g, '') : slug)
	const metaKeywords: Maybe<Maybe<string>[]> | undefined =
		siteMetadata?.keywords

	const twitterCard = isPost ? 'summary_large_image' : 'summary'

	return (
		<Helmet
			htmlAttributes={{ lang: 'en' }}
			title={title}
			defaultTitle={siteMetadata.title}
			titleTemplate={`%s · ${siteMetadata.title}`}
			meta={[
				{
					name: 'description',
					content: description || siteMetadata.description,
				},
				{
					property: `og:title`,
					content: title || siteMetadata.title,
				},
				{
					property: 'og:description',
					content: description || siteMetadata.description,
				},
				{
					property: 'og:url',
					content: slug
						? `${siteMetadata.siteUrl}/${slugWithoutSlashes()}/`
						: siteMetadata.siteUrl,
				},
				{
					name: 'twitter:card',
					content: twitterCard,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: `${siteMetadata.siteUrl}${image || siteMetadata.image}`,
				},
				{
					name: 'twitter:title',
					content: title || siteMetadata.title,
				},
				{
					name: 'twitter:description',
					content: description || siteMetadata.description,
				},

				{
					name: `twitter:creator`,
					content: siteMetadata.social.twitter.handle,
				},
				{
					name: `twitter:site`,
					content: siteMetadata.social.twitter.handle,
				},
			].concat(
				metaKeywords && metaKeywords.length > 0
					? {
							name: `keywords`,
							content: metaKeywords.join(', '),
					  }
					: [],
			)}
			link={[
				{
					rel: 'shortcut icon',
					type: 'image/png',
					href: `/favicon.png`,
				},
			]}
		/>
	)
}

// export const query = graphql`
// 	query SEO {
// 		site {
// 			siteMetadata {
// 				description
// 				siteUrl
// 				title
// 				social {
// 					github {
// 						username
// 						url
// 					}
// 					linkedin {
// 						url
// 						username
// 					}
// 					twitter {
// 						handle
// 						url
// 					}
// 				}
// 				author {
// 					name
// 					summary
// 				}
// 				image
// 			}
// 		}
// 	}
// `
