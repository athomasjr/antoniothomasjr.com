import styled from 'styled-components'
import { COLORS, mediaQueries } from 'styles'

export const Header = styled.header`
	display: none;
	flex-shrink: 0;

	nav {
		ul {
			list-style: none;
			display: flex;
			justify-content: space-between;

			li {
				font-size: 2rem;
				margin: auto 24px;

				a {
					padding: 0 8px;
					position: relative;
					transition: color 0.3s;

					&:after {
						content: '';
						position: absolute;
						background-color: ${COLORS.primary.dark};
						height: 3px;
						width: 0;
						left: 0;
						bottom: -2px;
						transition: 0.3s;
					}

					&:hover {
						color: ${COLORS.text.header};
					}

					&:hover:after {
						width: 100%;
					}
				}
			}
		}
	}

	div:first-child {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	${mediaQueries.laptopUp} {
		padding: 0 150px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100px;
		z-index: 1;
	}

	${mediaQueries.laptopXlUp} {
		padding: 0 250px;
	}
`
