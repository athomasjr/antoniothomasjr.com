import { BlogWrapper, InfoWrapper, SEO } from 'components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { PostBySlugQuery } from 'types'

interface IPostPageProps {
	data: PostBySlugQuery
}

export default function PostPage({ data }: IPostPageProps) {
	const { body, frontmatter, slug, timeToRead } = data.mdx!

	return (
		<BlogWrapper>
			<SEO
				isArticle
				title={frontmatter?.title}
				pathname={slug}
				description={frontmatter?.description}
				datePublished={frontmatter?.published}
				dateModified={frontmatter?.updated}
			/>
			<h1>{frontmatter?.title}</h1>
			<InfoWrapper
				timeToRead={timeToRead}
				author={frontmatter?.author}
				published={frontmatter?.published}
			/>

			<MDXRenderer remoteImages={frontmatter?.embeddedImagesRemote}>
				{body}
			</MDXRenderer>
		</BlogWrapper>
	)
}

export const query = graphql`
	query PostBySlug($slug: String) {
		mdx(slug: { eq: $slug }) {
			id
			slug
			body
			excerpt(truncate: true, pruneLength: 150)
			timeToRead
			frontmatter {
				author
				title
				description
				published(formatString: "MMMM Do, YYYY")
				updated(formatString: "MMMM Do, YYYY")
				embeddedImagesRemote {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`
