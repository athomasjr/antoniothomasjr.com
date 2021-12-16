import { motion } from 'framer-motion'
import styled, { css, keyframes, StyledProps } from 'styled-components'
import { COLORS, ELEVATIONS, FONTS, mediaQueries, PADDING } from 'styles'
import { SectionTitle } from 'styles/typography'

interface IHeaderProps {
	inView: boolean
}

const trackInFromBottom = keyframes`
0% {
		letter-spacing: -0.5em;
		-webkit-transform: translateZ(-700px) translateY(500px);
		transform: translateZ(-700px) translateY(500px);
		opacity: 0;
	}
	40% {
		opacity: 0.6;
	}
	100% {
		-webkit-transform: translateZ(0) translateY(0);
		transform: translateZ(0) translateY(0);
		opacity: 1;
	}
`

const showHeader = ({ inView }: StyledProps<IHeaderProps>) => {
	if (inView) {
		return css`
			-webkit-animation: ${trackInFromBottom} 0.8s
				cubic-bezier(0.215, 0.61, 0.355, 1) both;
			animation: ${trackInFromBottom} 0.8s cubic-bezier(0.215, 0.61, 0.355, 1)
				both;
		`
	}
	return null
}

export const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: ${PADDING.page.phone};
	gap: 20px;
	width: 100%;

	${mediaQueries.tabletUp} {
		padding: ${PADDING.page.tablet};
	}

	${mediaQueries.laptopUp} {
		display: grid;
		grid-template-columns: 1.5fr 1fr;
		grid-gap: 60px;
		padding: ${PADDING.page.laptop};

		h2 {
			font-size: ${FONTS.size.laptop_header};
			align-self: start;
		}
	}

	${mediaQueries.laptopXlUp} {
		grid-template-columns: 2fr 1fr;
		padding: ${PADDING.page.laptopXL};

		h2 {
			font-size: ${FONTS.size.big_laptop_header};

			margin-bottom: 20px;
		}
	}
`

export const Header = styled(SectionTitle)`
	${mediaQueries.tabletUp} {
		opacity: 0;
		${showHeader}
	}
`

export const Image = styled.div`
	border-radius: 5px;
	filter: drop-shadow(1px 2px 2px hsl(var(--color-shadow) / 0.333))
		drop-shadow(2px 4px 4px hsl(var(--color-shadow) / 0.333))
		drop-shadow(3px 6px 6px hsl(var(--color-shadow) / 0.333));
	${mediaQueries.tabletLand} {
		width: 70%;
	}

	${mediaQueries.laptopUp} {
		z-index: 1;
		grid-column: 1/2;
		width: 90%;
	}
`

export const InfoContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 32px;
	${mediaQueries.tabletLand} {
		align-items: center;
		gap: 48px;
	}

	${mediaQueries.laptopUp} {
		gap: 0;
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 20px;

	p {
		margin-bottom: 35px;
	}

	h3 {
		color: var(--color-header);
		font-size: 2rem;
	}

	${mediaQueries.tabletUp} {
		h3 {
			font-size: 2.5rem;
		}
	}

	${mediaQueries.tabletLand} {
		width: 70%;
	}

	${mediaQueries.laptopUp} {
		align-self: start;
		width: 100%;
		align-items: flex-start;
		padding: 0 15px;

		h3 {
			margin-top: 0;
		}
	}
`

export const CTA = styled(motion.a)`
	align-self: start;
	border-bottom: 1px solid ${COLORS.primary.dark};
	font-size: 1.5rem;
	color: var(--color-header);

	${mediaQueries.tabletUp} {
		font-size: 2rem;
	}

	${mediaQueries.laptopUp} {
		margin-bottom: 0;
		font-size: 1.85rem;
		span {
			display: inline-block;
			transition: transform 0.3s;
		}
		&:hover {
			span {
				transform: translateX(30%);
			}
		}
	}
`

export const Card = styled.div`
	background: var(--color-cardBg);
	border-radius: 5px;
	width: 100%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: ${ELEVATIONS.small};

	p {
		color: var(--color-header);
		font-size: 1.5rem;
		text-transform: capitalize;
	}

	ul {
		list-style: none;
		display: flex;
		padding: 0;
		gap: 8px;
	}

	svg {
		color: ${COLORS.primary.dark};
		font-size: 3rem;
	}

	${mediaQueries.tabletUp} {
		p {
			font-size: 2.3rem;
		}
	}

	${mediaQueries.tabletLand} {
		width: 70%;
	}

	${mediaQueries.laptopUp} {
		width: 100%;
		align-self: flex-end;
		margin-top: auto;
	}
`
