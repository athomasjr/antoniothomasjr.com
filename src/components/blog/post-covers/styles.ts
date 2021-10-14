import styled from 'styled-components'
import { COLORS, ELEVATIONS } from 'styles'

export const PostCovers = styled.div`
	background: var(--color-cardBg);
	border-radius: 4px;
	padding: 16px;
	box-shadow: ${ELEVATIONS.medium};
	margin: 32px 0 48px;

	> p:first-child {
		display: inline-block;
		color: var(--color-header);
		font-size: 2rem;
		position: relative;
		/* border-bottom: 4px solid var(--color-primary); */

		&:before {
			content: '';
			position: absolute;
			border-radius: 4px;
			background-color: ${COLORS.primary.dark};
			height: 4px;
			width: 100%;
			left: 0;
			bottom: -2px;
		}
	}
`

export const Audience = styled.p`
	font-style: italic;
	padding: 8px 16px;
	border-radius: 4px;
	border: 2px solid var(--color-primary);
`
