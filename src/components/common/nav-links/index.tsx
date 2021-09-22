import React from 'react'
import { MyNavLinkData } from 'types'
import MyLink from '../my-link'

interface NavLinksProps {
	linkData: MyNavLinkData[]
	className?: string
	activeClass?: string
	isMobile?: boolean
	onClick?: () => void
}

export default function NavLinks({
	linkData,
	className,
	activeClass,
	isMobile,

	onClick,
}: NavLinksProps) {
	const links = !isMobile ? linkData.filter(link => !link.isMobile) : linkData

	return (
		<div className={className}>
			<nav>
				<ul>
					{links.map(link => (
						<li key={link.id}>
							<MyLink activeClass={activeClass} onClick={onClick} link={link} />
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
