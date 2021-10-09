import { NavLinks } from 'components/common'
import styled, { css, StyledProps } from 'styled-components'
import { mediaQueries } from 'styles'

interface IMobileNavLinksProps {
	showNav: boolean
	isLight: boolean
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
	/* position: fixed; */
	/* top: 0; */
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	z-index: 2;
	padding: 15px;
	${mediaQueries.laptopUp} {
		display: none;
	}
`

export const MobileNavLinks = styled(NavLinks)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100vh;
	width: 100%;
	position: absolute;
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

export const ToggleContainer = styled.div`
	/* position: fixed; */
	/* top: 0; */
	/* right: 0; */
	/* margin: 16px 8px 0 0; */
`
