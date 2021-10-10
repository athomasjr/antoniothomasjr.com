import styled from 'styled-components'
import { ELEVATIONS, FONTS, mediaQueries } from 'styles'

export const PostCard = styled.div`
	/* --shadow-color: var(--color-shadow); */
	background: var(--color-cardBg);
	box-shadow: ${ELEVATIONS.medium};
	border-radius: 4px;
	padding: 4px 20px 20px 20px;
	transition: all 0.3s ease;

	h2 {
		color: var(--color-header);
		font-family: ${FONTS.header};
		font-weight: 600;
	}

	div {
		margin-bottom: 16px;
	}

	${mediaQueries.laptopUp} {
		&:hover {
			transform: scale(1.08);
			box-shadow: ${ELEVATIONS.large};
		}
	}
`
