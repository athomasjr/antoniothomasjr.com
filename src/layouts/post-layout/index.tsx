import { InfoContainer, SEO, SubscribeForm } from 'components'
import React from 'react'
import { PostBySlugQuery } from 'types'
import * as styles from './blog-wrapper.module.scss'

interface IBlogWrapperProps {
	children: React.ReactNode
	post: PostBySlugQuery
}

export default function PostLayout({ children, post }: IBlogWrapperProps) {
	const { frontmatter, slug, timeToRead } = post.mdx!

	return (
		<article className={styles.blog_wrapper}>
			<SEO
				image={post.mdx?.frontmatter?.featuredImage}
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
			<div className={styles.form_container}>
				<SubscribeForm />
			</div>
		</article>
	)
}
