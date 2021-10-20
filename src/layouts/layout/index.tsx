import { Footer, Header, MobileHeader, ScrollTop } from 'components'
import React from 'react'
import * as S from './styles'

interface LayoutProps {
	children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<S.Container>
				<Header />
				<MobileHeader />
				<main>{children}</main>
				<Footer />
			</S.Container>
			<ScrollTop />
		</>
	)
}
