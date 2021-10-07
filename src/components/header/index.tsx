import Logo from 'assets/svg/logo.inline.svg'
// import { ThemeToggle } from 'components'
// import { useThemeContext } from 'context/theme'
import { myLinkData } from 'data'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { NavLinks, Social } from '../common'
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
			{/* <ThemeToggle
				defaultChecked={colorMode === 'dark'}
				onChange={() => console.log('hello')}
			/> */}
			<Social />
		</S.Header>
	)
}
