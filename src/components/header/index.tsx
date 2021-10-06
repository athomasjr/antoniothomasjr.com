import Logo from 'assets/svg/logo.inline.svg'
import { useTheme } from 'context/theme'
import { myLinkData } from 'data'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Toggle from 'react-toggle'
import { NavLinks, Social } from '../common'
import * as S from './style'
import './toggle.css'

export default function Header() {
	const { theme, toggleTheme } = useTheme()
	return (
		<S.Header>
			<div>
				<GatsbyLink to='/'>
					<Logo />
				</GatsbyLink>
				<NavLinks linkData={myLinkData} />
			</div>
			<Toggle
				defaultChecked={theme === 'dark'}
				onChange={toggleTheme}
				icons={{
					checked: <FiMoon />,
					unchecked: <FiSun />,
				}}
			/>

			<Social />
		</S.Header>
	)
}
