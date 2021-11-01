import loadable from '@loadable/component'
import { InfoContainer } from 'components/blog'
import SEO from 'components/seo'
import { useThemeContext } from 'context/theme'
import { useSiteMetadata } from 'hooks'
import React from 'react'
import { PostBySlugQuery } from 'types'
import * as S from './styles'

const SubscribeForm = loadable(() => import('components/subscribe-form'))

interface IPostLayoutProps {
	children: React.ReactNode
	post: PostBySlugQuery
}

export default function PostLayout({ children, post }: IPostLayoutProps) {
	const { frontmatter, slug, timeToRead } = post.mdx!
	const siteMetadata = useSiteMetadata()
	const { colorMode } = useThemeContext()

	return (
		<S.Article>
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
			<S.Title>{frontmatter?.title}</S.Title>
			<InfoContainer
				timeToRead={timeToRead}
				author={frontmatter?.author}
				published={frontmatter?.published}
			/>
			<S.Content isLight={colorMode !== 'dark'}>{children}</S.Content>
			<S.FormContainer>
				<SubscribeForm />
			</S.FormContainer>
			<S.StyledTwitterShare url={`${siteMetadata.siteUrl}/blog/${slug}`} />
		</S.Article>
	)
}
