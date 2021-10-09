import styled from 'styled-components'
import { COLORS } from 'styles'

export const InfoContainer = styled.div`
	display: flex;
	color: ${COLORS.header.light};
	align-items: center;

	p {
		font-size: 1.2rem;
	}

	margin-bottom: 20px;
`

export const Image = styled.div`
	background: ${COLORS.primary.dark};
	clip-path: circle(35% at 52% 65%);
	margin-right: 16px;
	width: 35px;
	margin-bottom: 16px;
`
