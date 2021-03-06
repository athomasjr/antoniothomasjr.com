import styled from 'styled-components'
import { COLORS, FONTS, mediaQueries, PADDING } from 'styles'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	padding: ${PADDING.page.phone};
	gap: 30px;
	margin-top: 40px;
	h1 {
		font-size: 2.5rem;
		color: var(--color-header);
	}

	p {
		font-size: 1.6rem;

		a {
			color: var(--color-text);
			border-bottom: 1px solid ${COLORS.primary.dark};
		}
	}

	${mediaQueries.tabletUp} {
		gap: 50px;
		padding: ${PADDING.page.tablet};
		h1 {
			font-size: ${FONTS.size.tablet_header};
		}

		p {
			font-size: 1.8rem;
		}
	}

	${mediaQueries.tabletLand} {
		padding: ${PADDING.page.laptop};
	}

	${mediaQueries.laptopUp} {
		text-align: center;
		h1 {
			font-size: ${FONTS.size.laptop_header};
		}

		p {
			font-size: 2rem;
		}
	}
`

export const ImgContainer = styled.div`
	width: 50%;
	margin: 0 auto;
`
