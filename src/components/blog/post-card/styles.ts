import styled from 'styled-components'
import { COLORS, SHADOW } from 'styles'

export const PostCard = styled.div`
	background: ${({ theme }) => theme.cardBg};
	box-shadow: ${SHADOW.card};
	border-radius: 4px;
	padding: 4px 20px 20px 20px;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.08);
		box-shadow: ${SHADOW.hover};
	}

	h2 {
		color: ${COLORS.text.header};
		font-family: $font-headline;
		font-weight: 600;
	}

	div {
		margin-bottom: 16px;
	}
`
