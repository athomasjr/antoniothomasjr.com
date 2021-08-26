import React from 'react'
import { MyNavLinkData } from 'types'
import MyLink from '../my-link'

interface NavLinksProps {
	linkData: MyNavLinkData[]
	className?: string
	onClick?: () => void
}

export default function NavLinks({
	linkData,
	className,

	onClick,
}: NavLinksProps) {
	return (
		<div className={className}>
			<nav>
				<ul>
					{linkData.map(link => (
						<li key={link.id}>
							<MyLink onClick={onClick} link={link} />
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
