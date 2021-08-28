import React from 'react'
import { MyNavLinkData } from 'types'
import MyLink from '../my-link'

interface NavLinksProps {
	linkData: MyNavLinkData[]
	className?: string
	activeClass?: string
	onClick?: () => void
}

export default function NavLinks({
	linkData,
	className,
	activeClass,

	onClick,
}: NavLinksProps) {
	return (
		<div className={className}>
			<nav>
				<ul>
					{linkData.map(link => (
						<li key={link.id}>
							<MyLink activeClass={activeClass} onClick={onClick} link={link} />
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
