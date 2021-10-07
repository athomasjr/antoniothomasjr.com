import { motion } from 'framer-motion'
import styled, { css, keyframes, StyledProps } from 'styled-components'
import { COLORS, FONTS, mediaQueries, PADDING, SHADOW } from 'styles'

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

	h2 {
		color: ${COLORS.text.header};
		font-family: ${FONTS.header};
		font-weight: 600;
	}

	${mediaQueries.tabletUp} {
		padding: ${PADDING.page.tablet};
		h2 {
			font-size: ${FONTS.size.tablet_header};
		}
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

export const Header = styled.h2`
	${mediaQueries.tabletUp} {
		opacity: 0;
		${showHeader}
	}
`

export const Image = styled.div`
	border-radius: 5px;

	${mediaQueries.tabletLand} {
		width: 70%;
	}

	${mediaQueries.laptopUp} {
		z-index: 1;
		grid-column: 1/2;
		width: 90%;
		box-shadow: ${SHADOW.card};
	}
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	margin-bottom: 30px;

	p {
		margin-bottom: 35px;
	}

	h3 {
		color: ${COLORS.text.header};
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
		width: 100%;
		align-items: flex-start;
		padding: 15px;
	}
`

export const CTA = styled(motion.a)`
	align-self: start;
	border-bottom: 1px solid ${COLORS.primary.dark};
	font-size: 1.5rem;
	color: ${COLORS.text.header};

	${mediaQueries.tabletUp} {
		font-size: 2rem;
	}

	${mediaQueries.laptopUp} {
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
	background: ${({ theme }) => theme.cardBg};
	border-radius: 5px;
	width: 90%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-shadow: ${SHADOW.card} p {
		color: ${({ theme }) => theme.header};
		font-size: 1.5rem;
	}

	ul {
		list-style: none;
		display: flex;
		padding: 0;
	}

	li {
		padding: 5px 8px 5px 8px;
		margin: 0 5px 0 0;
		background-color: ${COLORS.tag.purple};
		color: ${({ theme }) => theme.header};

		border-radius: 4px;
		text-align: center;
	}

	${mediaQueries.tabletUp} {
		ul {
			gap: 16px;
		}
		p {
			font-size: 2.3rem;
		}
		li {
			font-size: 1.75rem;
			margin-right: 0;
		}
	}

	${mediaQueries.tabletLand} {
		width: 60%;
	}

	${mediaQueries.laptopUp} {
		grid-column: 2/3;
		width: 100%;
	}
`
