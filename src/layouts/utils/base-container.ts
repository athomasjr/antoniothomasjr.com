import styled from 'styled-components'
import { mediaQueries, PADDING } from 'styles'

export const BaseContainer = styled.section`
	padding: ${PADDING.page.phone} ${mediaQueries.tabletLand} {
		padding: ${PADDING.page.laptop};
	}

	${mediaQueries.tabletUp} {
		padding: ${PADDING.page.tablet};
	}
	${mediaQueries.laptopUp} {
		padding: ${PADDING.page.laptop};
		grid-template-columns: 1.5fr 1fr;
	}

	${mediaQueries.laptopXlUp} {
		padding: ${PADDING.page.laptopXL};
	}
`
