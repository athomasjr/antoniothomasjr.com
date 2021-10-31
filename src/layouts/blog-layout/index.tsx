import { SEO } from 'components'
import React from 'react'
import * as S from './styles'

interface IBlogLayoutProps {
	children: React.ReactNode
}

export default function BlogLayout({ children }: IBlogLayoutProps) {
	return (
		<S.Container>
			<SEO
				title='Blog'
				description='This is where I share the details and experiences of my journey in web development.'
			/>
			<h1>All Blog Posts</h1>
			{children}
		</S.Container>
	)
}
