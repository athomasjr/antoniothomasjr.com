import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { COLORS } from 'styles'

export const Container = styled(BackgroundImage)`
	text-align: center;
	height: 80vh;
	background: linear-gradient(rgba(20, 20, 20, 0.5), rgba(20, 20, 20, 0.5));
	opacity: 1 !important;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.text.header.dark};

	h1 {
		color: ${COLORS.text.header.dark};
	}

	div {
		width: 40%;
		padding: 10px;
	}

	a {
		display: inline-block;
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
`
