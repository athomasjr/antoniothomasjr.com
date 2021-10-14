import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ELEVATIONS, FONTS, mediaQueries, PADDING } from 'styles'

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	padding: ${PADDING.page.phone};
	justify-content: space-between;
	align-items: center;
	gap: 40px;
	h2 {
		color: var(--color-header);
		font-family: ${FONTS.header};
		font-weight: 600;
	}

	${mediaQueries.tabletUp} {
		padding: ${PADDING.page.tablet};
		h2 {
			font-size: ${FONTS.size.tablet_header};
		}
	}

	${mediaQueries.tabletLand} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto 1fr;
		gap: 70px;
		align-items: start;
		p {
			margin-top: 0;
		}
	}

	${mediaQueries.laptopUp} {
		padding: ${PADDING.page.laptop};
		h2 {
			font-size: ${FONTS.size.laptop_header};
		}
	}
	${mediaQueries.laptopXlUp} {
		height: 100vh;
		padding: ${PADDING.page.laptopXL};

		h2 {
			font-size: ${FONTS.size.big_laptop_header};
		}

		p {
			/* font-size: 2rem; */
			padding: 0 12px;
		}
	}
`

export const Content = styled(motion.div)`
	order: 1;
	grid-row: 2/3;
	grid-column: 1/2;
`

export const ImageContainer = styled(motion.div)`
	grid-row: 2/3;
	grid-column: 2/3;
	border-radius: 4px;
	width: 90%;
	justify-self: center;
	box-shadow: ${ELEVATIONS.small};

	${mediaQueries.laptopUp} {
		width: 80%;
	}
`
