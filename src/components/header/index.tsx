import Logo from 'assets/at-logo.inline.svg'
import NavLinks from 'components/common/nav-links'
import { myLinkData } from 'data'
import React from 'react'
import * as styles from './header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<NavLinks linkData={myLinkData} />
		</header>
	)
}
