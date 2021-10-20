import Logo from 'assets/svg/logo.inline.svg'
import { NavLinks, Social, ThemeToggle } from 'components'
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
