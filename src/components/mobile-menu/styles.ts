import styled, { css, StyledProps } from 'styled-components'
import { COLORS } from 'styles'

interface IMobileMenuButtonProps {
	showNav: boolean
}

const showNavigation = ({ showNav }: StyledProps<IMobileMenuButtonProps>) => {
	if (showNav) {
		return css`
			position: fixed;
			top: 16px;

			div:first-child {
				transform: translateY(8px) rotateZ(45deg);
			}

			div:nth-child(2) {
				opacity: 0;
			}

			div:nth-child(3) {
				transform: translateY(-6px) rotateZ(-45deg);
			}
		`
	}

	return null
}

export const MobileMenuButton = styled.button<IMobileMenuButtonProps>`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 4.5rem;
	height: 4.5rem;
	padding: 12px 0;

	background: transparent;
	border: none;
	cursor: pointer;
	z-index: 100;

	div {
		width: 2.5rem;
		height: 0.29rem;
		background: ${COLORS.primary.dark};
		transition: opacity 300ms, transform 300ms;
	}

	${showNavigation}
`
