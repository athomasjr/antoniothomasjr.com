import { SEO } from 'components'
import React from 'react'
import * as styles from './blog-layout.module.scss'

interface IBlogLayoutProps {
	children: React.ReactNode
}

export default function BlogLayout({ children }: IBlogLayoutProps) {
	return (
		<div className={styles.blog_layout}>
			<SEO title='Blog' />
			<h1>Posts</h1>
			{children}
		</div>
	)
}
