import { ThemeToggle } from 'components'
import { MobileMenu } from 'components/common'
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
			<S.ToggleContainer>
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
