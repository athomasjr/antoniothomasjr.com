import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { COLORS, mediaQueries, PADDING } from 'styles'

const wave = keyframes`
	0% {
		transform: rotate(0deg);
	}
	10% {
		transform: rotate(16deg);
	}
	20% {
		transform: rotate(-6deg);
	}
	30% {
		transform: rotate(16deg);
	}
	40% {
		transform: rotate(-4deg);
	}
	50% {
		transform: rotate(16deg);
	}
	60% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(0deg);
	}
`

export const Container = styled.div`
	display: grid;
	align-items: center;
	height: 100vh;

	padding: 0 70px;

	${mediaQueries.tabletLand} {
		padding: ${PADDING.page.laptop};
	}

	${mediaQueries.laptopUp} {
		grid-template-columns: 1.5fr 1fr;
	}

	${mediaQueries.laptopXlUp} {
		padding: ${PADDING.page.laptopXL};
	}
`

export const Content = styled.div`
	margin: -148px 0 0 0;

	h1 {
		color: ${COLORS.text.header};
		font-weight: 600;
	}

	h2 {
		margin: 0 0 20px 0;
		font-size: 2rem;
	}

	${mediaQueries.phoneOnly} {
		h1 {
			font-size: 2.2rem;
		}

		h2 {
			font-size: 1.5rem;
		}
	}

	${mediaQueries.mdPhoneUp} {
		margin: -248px 0 0 0;
	}

	${mediaQueries.tabletUp} {
		h1 {
			font-size: 3.5rem;
		}
	}

	${mediaQueries.tabletLand} {
		margin: 0 auto;
	}

	${mediaQueries.laptopUp} {
		margin: 0 0 168px 0;
		grid-column: 1/2;
		grid-row: 1/1;
		h1 {
			font-size: 6rem;
		}

		h2 {
			font-size: 4rem;
			margin-bottom: 50px;
		}
	}
`

export const Hand = styled.span`
	animation: ${wave} 2.1s 0.6s infinite;
	transform-origin: 75% 75%;
	display: inline-block;
	margin: 0 5px 0 0;
`

export const CTA = styled(motion.div)`
	display: inline-block;
	color: ${COLORS.text.header};
	font-size: 1.5rem;
	a {
		border-bottom: 2px solid ${COLORS.primary.dark};
		padding: 0 0 5px 0;
	}

	${mediaQueries.tabletUp} {
		span {
			font-size: 2rem;
			margin-right: 10px;
		}
	}

	${mediaQueries.laptopUp} {
		font-size: 2rem;
		margin: 0;
		transition: all 0.3s ease-in-out;
	}
`

export const Image = styled.div`
	background: ${COLORS.primary.dark};
	clip-path: circle(35% at 52% 65%);
	width: 50%;
	margin: 0 auto;

	${mediaQueries.smallOnly} {
		margin-bottom: 96px;
	}

	${mediaQueries.tabletLand} {
		width: 30%;
	}

	${mediaQueries.laptopUp} {
		width: 50%;
		grid-column: 2/3;
	}
`
