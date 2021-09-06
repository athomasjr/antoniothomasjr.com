import Logo from 'assets/sig2.inline.svg'
import NavLinks from 'components/common/nav-links'
import { myLinkData } from 'data'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import Social from '../common/social/index'
import * as styles from './header.module.scss'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.logo_nav_container}>
				<GatsbyLink to='/'>
					<Logo />
				</GatsbyLink>
				<NavLinks linkData={myLinkData} />
			</div>
			<Social />
		</header>
	)
}
