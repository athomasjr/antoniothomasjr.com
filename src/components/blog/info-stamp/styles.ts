import styled from 'styled-components'
import { COLORS, mediaQueries } from 'styles'

interface InfoStampProps {
	isLight: boolean
}

export const Container = styled.div<InfoStampProps>`
	p {
		font-size: 1.2rem;
		margin-bottom: 0;
		margin-top: 0;
	}

	p:first-child {
		color: ${({ isLight }) =>
			isLight ? COLORS.primary.dark : COLORS.primary.light};
	}

	${mediaQueries.tabletUp} {
		p {
			font-size: 1.5rem;
		}
	}
`
