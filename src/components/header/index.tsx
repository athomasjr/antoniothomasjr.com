import Logo from 'assets/svg/logo.inline.svg'
import { myLinkData } from 'data'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { NavLinks, Social } from '../common'
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
