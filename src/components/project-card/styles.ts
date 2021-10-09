import styled, { css, StyledProps } from 'styled-components'
import { COLORS, mediaQueries, SHADOW, TAG_COLORS } from 'styles'

interface IProjectCardProps {
	inView: boolean
}

const appear = ({ inView }: StyledProps<IProjectCardProps>) => {
	if (inView) {
		return css`
			opacity: 1;
			transform: translateY(0);
		`
	}
	return null
}

export const ProjectCard = styled.a<IProjectCardProps>`
	opacity: 0;
	transition: opacity 250ms ease-in, transform 300ms ease-in;
	transform: translateY(10%);

	${appear}
`

export const Project = styled.div`
	width: 70%;
	height: 100%;
	margin: 0 auto 40px;
	background: ${COLORS.background.medium};
	display: flex;
	flex-direction: column;
	padding: 32px;
	border-radius: 4px;

	p:last-child {
		padding: 5px;
		background-color: ${TAG_COLORS.white};
		color: ${COLORS.header.light};
		width: 50%;
		text-align: center;
		border-radius: 4px;
		font-size: 1em;
	}

	h3 {
		color: ${COLORS.header.light};
	}

	ul {
		list-style: none;
		display: flex;
		padding: 0;
	}

	li {
		padding: 5px 8px 5px 8px;
		margin: 0 5px 0 0;
		background-color: ${TAG_COLORS.purple};
		color: ${COLORS.header.light};
		border-radius: 4px;
		text-align: center;
	}

	${mediaQueries.laptopXlUp} {
		width: 100%;
		padding: 32px 32px 0 32px;
		margin: 0;
		position: relative;
		border-radius: 20px;
		height: 680px;

		p:last-child {
			padding: 5px 8px 5px 8px;
			width: 40%;
			font-size: 1.5em;
		}

		ul {
			font-size: 1.5rem;

			li {
				margin: 0 25px 0 0;
			}
		}

		&:hover {
			div:nth-child(3) {
				transform: translate(-5%, -5%);
			}
		}
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 5px;
	${mediaQueries.laptopUp} {
		padding: 0 10px;
	}
`

export const FirstImage = styled.div`
	display: none;
	${mediaQueries.laptopUp} {
		display: block;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 85%;
	}
`

export const SecondImage = styled.div`
	margin-top: 15px;

	${mediaQueries.laptopUp} {
		margin-top: 0;
		position: absolute;
		left: 50px;
		bottom: 60px;
		width: 300px;
		box-shadow: ${SHADOW.project_img};
		transition: transform 200ms;
	}
`
