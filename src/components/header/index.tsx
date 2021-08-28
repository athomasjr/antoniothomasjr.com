import Logo from 'assets/at-logo.inline.svg'
import NavLinks from 'components/common/nav-links'
import { myLinkData } from 'data'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import * as styles from './header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<GatsbyLink to='/'>
				<Logo />
			</GatsbyLink>
			<NavLinks linkData={myLinkData} />
		</header>
	)
}
