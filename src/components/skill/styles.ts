import styled from 'styled-components'
import { COLORS, ELEVATIONS, mediaQueries } from 'styles'

export const Skill = styled.div`
	background: var(--color-cardBg);
	width: 80px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	box-shadow: ${ELEVATIONS.medium};
	flex-direction: column;
	justify-content: space-around;
	padding: 8px;

	p {
		font-size: 1.2rem;
		margin: 0;
	}

	svg {
		color: ${COLORS.primary.dark};
		font-size: 3rem;
	}

	${mediaQueries.tabletUp} {
		width: 100px;
		height: 100px;

		svg {
			font-size: 5rem;
		}
	}
	${mediaQueries.tabletLand} {
		width: 120px;
		height: 120px;
	}
`
