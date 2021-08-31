import classNames from 'classnames'
import MobileMenu from 'components/common/mobile-menu'
import NavLinks from 'components/common/nav-links'
import { myLinkData } from 'data'
import React, { useState } from 'react'
import * as styles from './mobile-header.module.scss'

export default function MobileHeader() {
	const [showNav, setShowNav] = useState(false)

	return (
		<header className={styles.mobile_header}>
			<MobileMenu showNav={showNav} onClick={() => setShowNav(!showNav)} />

			<NavLinks
				onClick={() => setShowNav(!showNav)}
				className={classNames(styles.nav, { [styles.no_show]: !showNav })}
				linkData={myLinkData}
			/>
		</header>
	)
}
