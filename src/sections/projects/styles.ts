import styled from 'styled-components'
import { COLORS, mediaQueries, PADDING } from 'styles'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		color: ${COLORS.text.header};
		margin: 50px 0;
	}

	${mediaQueries.laptopUp} {
		display: grid;
		grid-template-columns: repeat(2, 50%);
		padding: ${PADDING.page.laptopXL};
		grid-gap: 80px;

		h2 {
			grid-column: 1 / 3;
			margin: 0;
		}
	}
`
