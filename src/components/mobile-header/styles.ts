import styled, { css, StyledProps } from 'styled-components'
import { mediaQueries } from 'styles'
import NavLinks from '../nav-links'

interface IMobileNavLinksProps {
	showNav: boolean
	isLight: boolean
}

interface IToggleContainerProps {
	showNav: boolean
}

const noShow = ({ showNav }: StyledProps<IMobileNavLinksProps>) => {
	if (!showNav) {
		return css`
			transition: transform 300ms;
			transform: translateX(100%);
		`
	}
	return null
}

export const MobileHeader = styled.header`
	position: relative;
	top: 0;
	height: 80px;
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	z-index: 2;

	${mediaQueries.laptopUp} {
		display: none;
	}
`

export const MobileNavLinks = styled(NavLinks)`
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100vh;
	width: 100%;
	top: 0;
	right: 0;
	transition: transform 300ms;
	transform: translateX(0);
	background-color: var(--color-background);
	${noShow}

	ul {
		list-style: none;
		position: relative;
		z-index: 5;
	}

	li {
		margin-top: 10px;
		font-size: 2rem;
	}
`
export const ToggleContainer = styled.div<IToggleContainerProps>`
	${({ showNav }) =>
		showNav &&
		css`
			display: none;
		`}
`
