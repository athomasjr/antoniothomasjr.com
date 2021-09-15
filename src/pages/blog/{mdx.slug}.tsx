import { BlogWrapper, SEO } from 'components'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { PostBySlugQuery } from 'types'

interface IPostPageProps {
	data: PostBySlugQuery
}

export default function PostPage({ data }: IPostPageProps) {
	const { body, frontmatter, slug } = data.mdx!

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
			<MDXRenderer>{body}</MDXRenderer>
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
				title
				description
				published(formatString: "MMMM Do, YYYY")
				updated(formatString: "MMMM Do, YYYY")
				isFeatured
			}
		}
	}
`
