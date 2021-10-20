import styled, { css } from 'styled-components'
import { COLORS, ELEVATIONS, mediaQueries } from 'styles'

interface IContainerProps {
	isVisible: boolean
}

export const Container = styled.div<IContainerProps>`
	position: fixed;
	bottom: 12px;
	right: 12px;
	opacity: 1;
	transition: opacity 0.3s ease-in;

	button {
		height: 32px;
		width: 32px;
		box-shadow: ${ELEVATIONS.medium};
		border-radius: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		color: ${COLORS.header.dark};
		background: var(--color-primary);
		font-size: 1.8rem;
		cursor: pointer;
	}

	${({ isVisible }) =>
		!isVisible &&
		css`
			opacity: 0;
		`}

	${mediaQueries.tabletUp} {
		button {
			width: 40px;
			height: 40px;
		}
	}

	${mediaQueries.laptopUp} {
		bottom: 24px;
		right: 24px;
	}
`
