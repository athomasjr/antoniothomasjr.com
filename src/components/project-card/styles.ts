import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ELEVATIONS, mediaQueries } from 'styles'
import { COLORS } from '../../styles/constants'

export const ProjectCard = styled(motion.div)`
	gap: 24px;
	position: relative;
	justify-content: space-between;
	display: flex;
	flex-direction: column;
	background: var(--color-cardBg);
	padding: 16px;
	box-shadow: ${ELEVATIONS.medium};
	border-radius: 4px;

	${mediaQueries.tabletLand} {
		width: 45%;
		min-height: 500px;
		max-height: 500px;
	}
	${mediaQueries.laptopUp} {
		min-height: 560px;
		max-height: 560px;
	}
`

export const HoverInfoCard = styled.div`
	z-index: 1;
	position: absolute;
	background: red;
	width: 100%;
	top: 0;
	left: 0;
	bottom: 70%;
`

export const ImageContainer = styled.div`
	align-self: center;
	height: fit-content;
	width: fit-content;
	border-radius: 4px;
`

export const InfoContainer = styled.div`
	margin-bottom: 16px;

	h3 {
		margin-top: 0;
	}

	p {
		margin-bottom: 16px;
	}
`

export const Stack = styled.ul`
	display: flex;
	gap: 8px;

	svg {
		color: ${COLORS.primary.dark};
		font-size: 3rem;
	}
`

export const ButtonsContainer = styled.div`
	display: flex;
	width: 60%;
	justify-content: space-between;
	align-items: end;
`

export const Button = styled.a`
	border-radius: 4px;
	text-align: center;
	font-size: 1.5rem;
	display: inline-block;
	padding: 8px 16px;
	width: 45%;
	box-shadow: ${ELEVATIONS.small};
	background: var(--color-primary);
	color: var(--color-header);
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.08);
		box-shadow: ${ELEVATIONS.medium};
	}
	svg {
		font-size: 4rem;
		color: var(--color-primary);
	}
`
