import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { PostLayout } from 'layouts'
import React from 'react'
import { PostBySlugQuery } from 'types'

interface IPostPageProps {
	data: PostBySlugQuery
}

export default function PostPage({ data }: IPostPageProps) {
	const { body, frontmatter } = data.mdx!

	return (
		<PostLayout post={data}>
			<MDXRenderer remoteImages={frontmatter?.embeddedImagesRemote}>
				{body}
			</MDXRenderer>
		</PostLayout>
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
