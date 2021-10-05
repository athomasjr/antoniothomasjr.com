import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { COLORS } from 'styles'

export const Container = styled(BackgroundImage)`
	text-align: center;
	/* height: 100vh; */
	background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5));
	opacity: 1 !important;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.text.header};

	div {
		width: 55%;
		padding: 10px;
	}

	a {
		display: flex;
		font-size: 1.5rem;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		background: ${COLORS.primary.dark};
		border-radius: 4px;
		margin: 10px 0 0 0;
		padding: 2px 10px;
		text-align: center;
	}

	/* @media screen and (min-width: $bp-mobile) {
		div {
			width: 40%;
		}

		p {
			font-size: 2rem;
		}

		h1 {
		}

		a {
			display: inline-block;
			font-size: 2rem;
		}
	} */

	/* @media screen and (min-width: $bp-tablet-landscape) {
		div {
			width: 100%;
		}
	} */
	/* @media screen and (min-width: $bp-laptop) {
		div {
			width: 100%;
		}

		a {
			transition: all 0.3s ease-in-out;
			span {
				display: inline-block;
				transition: all 0.3s ease-in-out;
			}

			&:hover {
				box-shadow: $shadow-hover;
				transform: translateY(-10%);
				span {
					transform: translateX(20%);
				}
			}
		}
	} */
`
