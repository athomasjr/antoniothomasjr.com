import styled from 'styled-components'
import { FONTS, SHADOW } from 'styles'

export const PostCard = styled.div`
	background: var(--color-cardBg);
	box-shadow: ${SHADOW.card};
	border-radius: 4px;
	padding: 4px 20px 20px 20px;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.08);
		box-shadow: ${SHADOW.hover};
	}

	h2 {
		color: var(--color-header);
		font-family: ${FONTS.header};
		font-weight: 600;
	}

	div {
		margin-bottom: 16px;
	}
`
