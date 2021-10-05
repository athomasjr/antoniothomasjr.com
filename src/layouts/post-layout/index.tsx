import { InfoContainer, SEO, SubscribeForm, TwitterShare } from 'components'
import { useSiteMetadata } from 'hooks'
import React from 'react'
import { PostBySlugQuery } from 'types'
import * as S from './styles'

interface IPostLayoutProps {
	children: React.ReactNode
	post: PostBySlugQuery
}

export default function PostLayout({ children, post }: IPostLayoutProps) {
	const { frontmatter, slug, timeToRead } = post.mdx!
	const siteMetadata = useSiteMetadata()

	return (
		<S.Container>
			<SEO
				image={
					post.mdx?.frontmatter?.featuredImage?.childImageSharp?.gatsbyImageData
						.images.fallback.src
				}
				isArticle
				twitterType='summary_large_image'
				title={frontmatter?.title}
				pathname={slug}
				description={frontmatter?.description}
				datePublished={frontmatter?.published}
				dateModified={frontmatter?.updated}
			/>
			<h1>{frontmatter?.title}</h1>
			<InfoContainer
				timeToRead={timeToRead}
				author={frontmatter?.author}
				published={frontmatter?.published}
			/>

			{children}
			<S.FormContainer>
				<SubscribeForm />
			</S.FormContainer>
			<TwitterShare url={`${siteMetadata.siteUrl}/blog/${slug}`} />
		</S.Container>
	)
}
