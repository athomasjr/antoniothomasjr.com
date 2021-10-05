import styled from 'styled-components'
import { COLORS, mediaQueries } from 'styles'

export const Container = styled.div`
	p {
		font-size: 1.2rem;
		margin-bottom: 0;
		margin-top: 0;
	}

	p:first-child {
		color: ${COLORS.primary.light};
	}

	${mediaQueries.tabletUp} {
		p {
			font-size: 1.5rem;
		}
	}
`
