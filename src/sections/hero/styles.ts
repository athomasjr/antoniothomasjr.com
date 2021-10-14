import { motion } from 'framer-motion'
import styled, { keyframes } from 'styled-components'
import { COLORS, FONTS, mediaQueries, PADDING } from 'styles'

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

export const Amp = styled(motion.span)`
	color: ${COLORS.primary.dark};
	display: inline-block;
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
		font-weight: 600;
		margin-bottom: 16px;
	}

	h2 {
		margin: 0 0 20px 0;
		font-size: 2rem;
		font-family: ${FONTS.body};
		font-weight: 400;
		color: var(--color-subHeader);
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
	color: var(--color-header);
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

export const ImageWrapper = styled.div`
	filter: drop-shadow(1px 2px 2px hsl(var(--color-shadow) / 0.333))
		drop-shadow(2px 4px 4px hsl(var(--color-shadow) / 0.333))
		drop-shadow(3px 6px 6px hsl(var(--color-shadow) / 0.333));
`

export const Image = styled.div`
	background: ${COLORS.primary.dark};
	clip-path: circle(35% at 52% 65%);
	width: 70%;
	margin: -96px auto 0;

	${mediaQueries.smallOnly} {
		margin-bottom: 96px;
	}

	${mediaQueries.tabletUp} {
		width: 50%;
	}

	${mediaQueries.tabletLand} {
		width: 40%;
		margin-top: 0;
	}

	${mediaQueries.laptopUp} {
		width: 50%;
		grid-column: 2/3;
	}
`
