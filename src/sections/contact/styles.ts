import styled from 'styled-components'
import { COLORS, FONTS, mediaQueries, PADDING, TAG_COLORS } from 'styles'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	padding: ${PADDING.page.phone};
	text-align: center;
	gap: 30px;
	h2 {
		color: var(--color-header);
	}

	h4 {
		background-color: ${TAG_COLORS.purple};
		color: ${COLORS.header.light};
		padding: 5px 10px;
		border-radius: 4px;
		display: inline-block;
	}

	${mediaQueries.tabletUp} {
		gap: 0;
		h2 {
			font-size: ${FONTS.size.tablet_header};
		}
	}

	${mediaQueries.tabletLand} {
		padding: ${PADDING.page.tablet};
	}

	${mediaQueries.laptopUp} {
		padding: 120px 260px;
		h2 {
			font-size: ${FONTS.size.laptop_header};
		}
	}
	${mediaQueries.laptopXlUp} {
		padding: 120px 350px;
		h2 {
			font-size: ${FONTS.size.big_laptop_header};
		}
	}
`
