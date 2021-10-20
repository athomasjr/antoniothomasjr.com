import { PostCard } from 'components/blog'
import { graphql } from 'gatsby'
import { BlogLayout } from 'layouts'
import React from 'react'
import { BlogIndexQuery } from '../../types/generated/index'

interface IBlogIndexProps {
	data: BlogIndexQuery
}

export default function BlogIndexPage({ data }: IBlogIndexProps) {
	const posts = data.allMdx.nodes
	return (
		<BlogLayout>
			{posts.map(post => (
				<PostCard
					key={post.id}
					author={post.frontmatter?.author}
					title={post.frontmatter?.title}
					description={post.frontmatter?.description}
					published={post.frontmatter?.published}
					timeToRead={post.timeToRead}
					slug={post.slug}
				/>
			))}
		</BlogLayout>
	)
}

export const query = graphql`
	query BlogIndex {
		allMdx(sort: { fields: frontmatter___published, order: DESC }) {
			nodes {
				id
				frontmatter {
					author
					description
					title
					published(formatString: "MMMM Do, YYYY")
				}
				timeToRead
				slug
			}
		}
	}
`
