import styled, { css, StyledProps } from 'styled-components'
import { COLORS, FONTS, mediaQueries } from 'styles'

interface IMessageProps {
	success?: boolean
	error?: boolean
}

const setMessageType = ({ success, error }: StyledProps<IMessageProps>) => {
	if (success) {
		return css`
			width: 400px;
			background-color: rgb(236, 255, 216);
			color: rgb(3, 142, 3);
		`
	}

	if (error) {
		return css`
			background-color: rgb(255, 249, 242);
			color: rgb(211, 0, 0);
		`
	}

	return null
}

export const Container = styled.div`
	background: ${COLORS.background.medium};
	width: 100%;
	border-radius: 4px;
	padding: 24px;

	p:first-child {
		color: ${COLORS.text.header};
		font-family: ${FONTS.header};
		font-weight: 600;
		font-size: 1.8rem;
	}

	${mediaQueries.tabletUp} {
		display: flex;
		flex-direction: column;
	}
`

export const Message = styled.p`
	padding: 4px;
	border-radius: 4px;
	text-align: center;
	${setMessageType};
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;

	input {
		width: 100%;
		padding: 12px 16px;
		border: none;
		border-radius: 4px;
		color: ${COLORS.text.light};
		background: ${COLORS.background.dark};
		margin-bottom: 12px;
		font-size: 1.8rem;

		&::placeholder,
		&::-webkit-input-placeholder,
		&::-moz-placeholder {
			color: ${COLORS.text.light};
			opacity: 1;
			font-size: 1.2rem;
		}

		&:focus {
			outline: none;
			border: 1px solid ${COLORS.primary.dark};
		}
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus {
		-webkit-text-fill-color: ${COLORS.text.header};
		-webkit-box-shadow: 0 0 0px 1000px #000 inset;
		box-shadow: 0 0 0px 1000px #000 inset;
		transition: background-color 5000s ease-in-out 0s;
	}

	${mediaQueries.tabletUp} {
		flex-direction: row;
		justify-content: space-between;
		gap: 20px;

		input {
			margin-bottom: 0;
			padding: 20px 16px 15px 20px;

			&::placeholder,
			&::-webkit-input-placeholder,
			&::-moz-placeholder {
				font-size: 1.4rem;
			}
		}
	}
`

export const Button = styled.button`
	padding: 12px 0;
	border: none;
	border-radius: 4px;
	background: ${COLORS.primary.dark};
	color: ${COLORS.text.header};
	font-weight: 600;
	font-size: 1.2rem;

	${mediaQueries.tabletUp} {
		width: 40%;
	}
`
