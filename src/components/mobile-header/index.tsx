import { MobileMenu } from 'components/common'
import { myLinkData } from 'data'
import React, { useState } from 'react'
import * as S from './styles'

export default function MobileHeader() {
	const [showNav, setShowNav] = useState(false)

	return (
		<S.MobileHeader>
			<MobileMenu showNav={showNav} onClick={() => setShowNav(!showNav)} />
			<S.MobileNavLinks
				isMobile
				onClick={() => setShowNav(!showNav)}
				showNav={showNav}
				linkData={myLinkData}
			/>
		</S.MobileHeader>
	)
}
