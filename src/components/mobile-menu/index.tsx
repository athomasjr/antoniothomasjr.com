import React from 'react'
import * as S from './styles'

interface MobileMenuProps {
	onClick: () => void
	showNav: boolean
}

export default function MobileMenu({ onClick, showNav }: MobileMenuProps) {
	return (
		<S.MobileMenuButton onClick={onClick} showNav={showNav} type='button'>
			<div />
			<div />
			<div />
		</S.MobileMenuButton>
	)
}
