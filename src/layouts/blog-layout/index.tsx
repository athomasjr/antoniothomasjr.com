import { SEO } from 'components'
import React from 'react'
import * as S from './styles'

interface IBlogLayoutProps {
	children: React.ReactNode
}

export default function BlogLayout({ children }: IBlogLayoutProps) {
	return (
		<S.Container>
			<SEO title='Blog' />
			<h1>Posts</h1>
			{children}
		</S.Container>
	)
}
