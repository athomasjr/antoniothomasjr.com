import styled from 'styled-components'
import { mediaQueries } from 'styles'

export const Footer = styled.footer`
	display: flex;
	align-items: center;
	height: 100px;
	justify-content: space-between;
	padding: 0 5px;
	flex-direction: column;
	min-width: 100%;
	flex-shrink: 0;

	p {
		font-size: 1rem;
	}

	${mediaQueries.tabletUp} {
		gap: 20px;
		padding: 0 20px;

		p {
			font-size: 1.5rem;
		}
	}

	${mediaQueries.laptopUp} {
		justify-content: space-between;
		flex-direction: row;
		padding: 0 100px;
	}
`
