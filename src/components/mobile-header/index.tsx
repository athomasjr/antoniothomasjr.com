import { ThemeToggle } from 'components'
import { MobileMenu } from 'components/common'
import { useTheme } from 'context/theme'
import { myLinkData } from 'data'
import React, { useState } from 'react'
import * as S from './styles'

export default function MobileHeader() {
	const { theme, toggleTheme } = useTheme()
	const [showNav, setShowNav] = useState(false)

	return (
		<S.MobileHeader>
			<MobileMenu showNav={showNav} onClick={() => setShowNav(!showNav)} />
			<S.ToggleContainer>
				<ThemeToggle defaultChecked={theme === 'dark'} onChange={toggleTheme} />
			</S.ToggleContainer>
			<S.MobileNavLinks
				isLight={theme === 'light'}
				isMobile
				onClick={() => setShowNav(!showNav)}
				showNav={showNav}
				linkData={myLinkData}
			/>
		</S.MobileHeader>
	)
}
