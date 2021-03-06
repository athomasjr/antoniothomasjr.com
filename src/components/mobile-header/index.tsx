import MobileMenu from 'components/mobile-menu'
import ThemeToggle from 'components/theme-toggle'
import { useThemeContext } from 'context/theme'
import { myLinkData } from 'data'
import React, { useState } from 'react'
import * as S from './styles'

export default function MobileHeader() {
	const { colorMode } = useThemeContext()
	const [showNav, setShowNav] = useState(false)

	return (
		<S.MobileHeader>
			<MobileMenu showNav={showNav} onClick={() => setShowNav(!showNav)} />
			<S.ToggleContainer showNav={showNav}>
				<ThemeToggle />
			</S.ToggleContainer>
			<S.MobileNavLinks
				isLight={colorMode !== 'dark'}
				isMobile
				onClick={() => setShowNav(!showNav)}
				showNav={showNav}
				linkData={myLinkData}
			/>
		</S.MobileHeader>
	)
}
