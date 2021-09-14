import Footer from 'components/footer'
import Header from 'components/header'
import MobileHeader from 'components/mobile-header'
import React from 'react'
import * as styles from './layout.module.scss'

interface LayoutProps {
	children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.layout}>
			<Header />
			<MobileHeader />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
