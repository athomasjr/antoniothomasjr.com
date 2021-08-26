import { Link as GatsbyLink } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import { MyNavLinkData } from 'types'

interface NavLinkProps {
	link: MyNavLinkData
	className?: string
	onClick?: () => void
}

export default function MyLink({ link, className, onClick }: NavLinkProps) {
	const navLink = link.isAnchor ? (
		<AnchorLink
			onAnchorLinkClick={onClick}
			to={link.to}
			title={link.text}
			stripHash
			className={className}
		/>
	) : (
		<GatsbyLink onClick={onClick} to={link.to} className={className}>
			{link.text}
		</GatsbyLink>
	)

	return navLink
}
