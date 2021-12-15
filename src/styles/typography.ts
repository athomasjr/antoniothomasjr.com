import styled from 'styled-components'
import { COLORS, FONTS, mediaQueries } from 'styles'

export const SectionTitle = styled.h2`
	color: var(--color-header);
	font-family: ${FONTS.header};
	font-weight: 600;
	text-align: center;

	span {
		position: relative;
		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: ${COLORS.primary.dark};
			left: 0;
			bottom: -8px;
			border-radius: 10px;
		}
	}

	${mediaQueries.tabletUp} {
		font-size: ${FONTS.size.tablet_header};
	}

	${mediaQueries.laptopUp} {
		text-align: left;
		font-size: ${FONTS.size.laptop_header};
	}

	${mediaQueries.laptopXlUp} {
		font-size: ${FONTS.size.big_laptop_header};
		margin-bottom: 20px;
	}
`
