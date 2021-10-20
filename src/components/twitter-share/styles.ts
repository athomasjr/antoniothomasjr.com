import { FiTwitter } from 'react-icons/fi'
import styled from 'styled-components'
import { COLORS, ELEVATIONS, mediaQueries } from 'styles'

interface ITwitterShareProps {
	isLight: boolean
}

export const TwitterShare = styled.a<ITwitterShareProps>`
	background: var(--color-cardBg);
	display: flex;
	align-items: center;
	text-decoration: none !important;
	padding: 4px 12px;
	border-radius: 4px;
	width: fit-content;
	transition: all 0.3s;
	color: ${COLORS.primary.light};
	box-shadow: ${ELEVATIONS.small};
	border: ${({ isLight }) => (isLight ? '2px solid' : '')}${({ isLight }) => (isLight ? COLORS.primary.light : 'none')};

	p {
		margin: 0 16px 0 0;
	}

	${mediaQueries.laptopUp} {
		&:hover {
			transform: scale(1.1);
			box-shadow: ${ELEVATIONS.medium};
		}
	}
`

export const Twitter = styled(FiTwitter)`
	padding: 0;
	font-size: 1.6rem;
	fill: ${COLORS.primary.light};
`
