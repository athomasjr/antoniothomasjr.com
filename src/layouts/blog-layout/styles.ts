import styled from 'styled-components'
import { FONTS, mediaQueries, PADDING } from 'styles'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 680px;
	padding: ${PADDING.page.phone};
	margin: 0 auto;
	gap: 24px;

	h1 {
		margin-bottom: 48px;
	}

	${mediaQueries.tabletUp} {
		padding: ${PADDING.page.tablet};
		gap: 40px;
	}

	${mediaQueries.laptopUp} {
		h1 {
			font-size: ${FONTS.size.laptop_header};
		}
	}
`
