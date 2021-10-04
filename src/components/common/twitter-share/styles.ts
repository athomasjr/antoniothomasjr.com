import { FiTwitter } from 'react-icons/fi'
import styled from 'styled-components'
import { COLORS } from 'styles'

export const TwitterShare = styled.a`
	background: ${COLORS.background.medium};
	display: flex;

	align-items: center;
	text-decoration: none !important;
	padding: 4px 12px;
	border-radius: 4px;
	width: fit-content;
	transition: transform 0.3s;

	&:hover {
		transform: scale(1.1);
	}

	p {
		margin: 0 16px 0 0;
	}
`

export const Twitter = styled(FiTwitter)`
	padding: 0;
	font-size: 1.6rem;
	fill: ${COLORS.primary.light};
`
