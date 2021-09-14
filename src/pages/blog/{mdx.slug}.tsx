import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { PostBySlugQuery } from '../../types/generated/index'

interface IPostPageProps {
	data: PostBySlugQuery
}

export default function PostPage({ data }: IPostPageProps) {
	const { body, frontmatter } = data.mdx!

	return (
		<>
			<h1>{frontmatter?.title}</h1>
			<MDXRenderer>{body}</MDXRenderer>
		</>
	)
}

export const query = graphql`
	query PostBySlug($slug: String) {
		mdx(slug: { eq: $slug }) {
			id
			slug
			body
			frontmatter {
				date
				title
			}
		}
	}
`
