import styled from 'styled-components'
import { COLORS } from './constants'

export const Highlight = styled.p`
	background: ${COLORS.primary.light};
	color: white;
	width: fit-content;
	padding: 0 4px;
	border-radius: 4px;
`

export const Header = styled.p`
	color: ${COLORS.text.header};
`
