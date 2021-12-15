import styled from 'styled-components'
import { mediaQueries, PADDING } from 'styles'

export const BaseContainer = styled.section`
	padding: 0 70px;

	${mediaQueries.tabletLand} {
		padding: ${PADDING.page.laptop};
	}

	${mediaQueries.laptopUp} {
		grid-template-columns: 1.5fr 1fr;
	}

	${mediaQueries.laptopXlUp} {
		padding: ${PADDING.page.laptopXL};
	}
`
