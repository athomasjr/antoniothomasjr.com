import styled from 'styled-components'
import { COLORS, FONTS } from './constants'

export const Highlight = styled.p`
	/* background: ${COLORS.background.medium}; */
	border: 1px solid ${COLORS.background.medium};
	color: ${COLORS.text.light};
	width: fit-content;
	padding: 0 8px;
	border-radius: 8px;
`

export const Header = styled.p`
	color: ${COLORS.text.header};
	font-size: ${FONTS.size.sub_sub_heading} !important;
`
