import Footer from 'components/footer'
import Header from 'components/header'
import MobileHeader from 'components/mobile-header'
import ScrollTop from 'components/scroll-top'
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
