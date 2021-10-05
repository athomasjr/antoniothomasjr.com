import styled from 'styled-components'
import { COLORS } from 'styles'

export const PostCard = styled.div`
	background: ${COLORS.background.medium};
	border-radius: 4px;
	padding: 4px 20px 20px 20px;

	h2 {
		color: ${COLORS.text.header};
		font-family: $font-headline;
		font-weight: 600;
	}

	div {
		margin-bottom: 16px;
	}
`
