import styled from 'styled-components'
import { COLORS, mediaQueries } from 'styles'

export const SocialContainer = styled.div`
	font-size: 2.5rem;
	display: flex;
	justify-content: space-between;
	width: 50%;
	align-items: center;
	line-height: 0;

	a {
		transition: color 0.3s, transform 0.3s;

		&:hover {
			color: ${COLORS.primary.dark};
			transform: scale(1.2);
		}
	}

	${mediaQueries.laptopUp} {
		width: 15%;
	}
`
