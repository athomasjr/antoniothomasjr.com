import { Link as GatsbyLink } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import { MyNavLinkData } from 'types'

interface NavLinkProps {
	link: MyNavLinkData
	className?: string
	activeClass?: string
	onClick?: () => void
}

export default function MyLink({
	link,
	className,
	onClick,
	activeClass,
}: NavLinkProps) {
	const navLink = link.isAnchor ? (
		<AnchorLink
			onAnchorLinkClick={onClick}
			to={link.to}
			title={link.text}
			className={className}
			gatsbyLinkProps={{ activeClassName: activeClass }}
			stripHash
		/>
	) : (
		<GatsbyLink
			onClick={onClick}
			to={link.to}
			className={className}
			activeClassName={activeClass}>
			{link.text}
		</GatsbyLink>
	)

	return navLink
}
