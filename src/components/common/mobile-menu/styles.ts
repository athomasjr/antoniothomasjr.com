import styled, { css, StyledProps } from 'styled-components'
import { COLORS } from 'styles'

interface IMobileMenuButtonProps {
	showNav: boolean
}

const showNavigation = ({ showNav }: StyledProps<IMobileMenuButtonProps>) => {
	if (showNav) {
		return css`
			div:first-child {
				transform: translateY(8px) rotateZ(45deg);
			}

			div:nth-child(2) {
				opacity: 0;
			}

			div:nth-child(3) {
				transform: translateY(-8px) rotateZ(-45deg);
			}
		`
	}

	return null
}

export const MobileMenuButton = styled.button<IMobileMenuButtonProps>`
	position: fixed;
	right: 0;
	top: 0;
	margin: 10px 20px 0 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 4.5rem;
	height: 4.5rem;
	padding: 10px 0;
	border-radius: 50%;
	background: ${COLORS.background.medium};
	border: none;
	cursor: pointer;
	z-index: 100;

	div {
		width: 2.5rem;
		height: 0.29rem;
		background: ${COLORS.primary.light};
		border-radius: 5px;
		transition: opacity 300ms, transform 300ms;
		margin: 0 auto;
	}

	${showNavigation}
`
