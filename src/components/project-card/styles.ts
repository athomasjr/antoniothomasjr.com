import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ELEVATIONS, mediaQueries } from 'styles'

export const ProjectCard = styled(motion.div)`
	/* gap: 24px; */
	justify-content: space-between;
	display: flex;
	flex-direction: column;
	background: var(--color-cardBg);
	padding: 16px;
	box-shadow: ${ELEVATIONS.medium};

	${mediaQueries.tabletLand} {
		width: 45%;
		min-height: 420px;
	}
	${mediaQueries.laptopUp} {
		min-height: 500px;
	}
`

export const ImageContainer = styled.div`
	align-self: center;
	height: fit-content;
	width: fit-content;
	border-radius: 4px;
`

export const InfoContainer = styled.div`
	h3 {
		margin-top: 0;
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
