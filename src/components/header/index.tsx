import Logo from 'assets/svg/logo.inline.svg'
import NavLinks from 'components/nav-links'
import Social from 'components/social'
import ThemeToggle from 'components/theme-toggle'
import { myLinkData } from 'data'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import * as S from './style'

export default function Header() {
	// const { colorMode, setColorMode } = useThemeContext()

	return (
		<S.Header>
			<div>
				<GatsbyLink to='/'>
					<Logo />
				</GatsbyLink>
				<NavLinks linkData={myLinkData} />
			</div>
			<ThemeToggle />
			<Social />
		</S.Header>
	)
}
