import classNames from 'classnames'
import React from 'react'
import * as styles from './mobile-menu.module.scss'

interface MobileMenuProps {
	onClick: () => void
	showNav: boolean
}

export default function MobileMenu({ onClick, showNav }: MobileMenuProps) {
	return (
		<button
			onClick={onClick}
			className={classNames(styles.mobile_menu, { [styles.show_nav]: showNav })}
			type='button'>
			<div />
			<div />
			<div />
		</button>
	)
}
