import Logo from 'assets/svg/logo.inline.svg'
import { myLinkData } from 'data'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { NavLinks, Social } from '../common'
import * as S from './style'

export default function Header() {
	return (
		<S.Header>
			<div>
				<GatsbyLink to='/'>
					<Logo />
				</GatsbyLink>
				<NavLinks linkData={myLinkData} />
			</div>
			<Social />
		</S.Header>
	)
}
