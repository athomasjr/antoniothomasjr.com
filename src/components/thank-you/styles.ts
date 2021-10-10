import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { COLORS, mediaQueries } from 'styles'

export const Container = styled(BackgroundImage)`
	text-align: center;
	height: 80vh;
	background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5));
	opacity: 1 !important;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.header.dark};

	h1 {
		color: ${COLORS.header.dark};
	}

	div {
		width: 80%;
		padding: 10px;
	}

	a {
		display: inline-block;
		font-size: 1.5rem;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		background: ${COLORS.primary.dark};
		box-shadow: 1px 2px 2px hsl(v240deg 8% 0% / 0.333),
			2px 4px 4px hsl(v240deg 8% 0% / 0.333),
			3px 6px 6px hsl(v240deg 8% 0% / 0.333);
		border-radius: 4px;
		margin: 10px 0 0 0;
		padding: 2px 10px;
		text-align: center;
	}

	${mediaQueries.smallOnly} {
		div {
			width: 100%;
		}
	}
	${mediaQueries.laptopUp} {
		a {
			transition: all 0.3s;
			&:hover {
				transform: scale(1.08);
				box-shadow: 1px 2px 2px hsl(var(--color-shadow) / 0.2),
					2px 4px 4px hsl(240deg 8% 0% / 0.2),
					4px 8px 8px hsl(240deg 8% 0% / 0.2),
					8px 16px 16px hsl(240deg 8% 0% / 0.2),
					16px 32px 32px hsl(240deg 8% 0% / 0.2);
			}
		}

		div {
			width: 40%;
		}
	}
`
