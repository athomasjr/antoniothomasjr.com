import { FiTwitter } from 'react-icons/fi'
import styled from 'styled-components'
import { COLORS, SHADOW } from 'styles'

interface ITwitterShareProps {
	isLight: boolean
}

export const TwitterShare = styled.a<ITwitterShareProps>`
	background: ${({ theme }) => theme.cardBg};
	display: flex;
	align-items: center;
	text-decoration: none !important;
	padding: 4px 12px;
	border-radius: 4px;
	width: fit-content;
	transition: all 0.3s;
	color: ${COLORS.primary.light};
	box-shadow: ${SHADOW.card};
	border: ${({ isLight }) => (isLight ? '2px solid' : '')}${({ isLight }) => (isLight ? COLORS.primary.light : 'none')};

	&:hover {
		transform: scale(1.1);
		box-shadow: ${SHADOW.hover};
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
