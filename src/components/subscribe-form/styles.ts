import styled, { css, StyledProps } from 'styled-components'
import { COLORS, FONTS, mediaQueries, SHADOW } from 'styles'

interface IMessageProps {
	success?: boolean
	error?: boolean
}

interface IContainerProps {
	isLight: boolean
}

interface IFormProps {
	isLight: boolean
}
interface IButtonProps {
	isLight: boolean
}

const setMessageType = ({ success, error }: StyledProps<IMessageProps>) => {
	if (success) {
		return css`
			background-color: rgb(236, 255, 216);
			color: rgb(3, 142, 3);

			${mediaQueries.tabletUp} {
				width: 70%;
			}
		`
	}

	if (error) {
		return css`
			background-color: rgb(255, 249, 242);
			color: rgb(211, 0, 0);

			${mediaQueries.tabletUp} {
				width: 70%;
			}
		`
	}

	return null
}

export const Container = styled.div<IContainerProps>`
	/* background: ${COLORS.background.medium}; */
	width: 100%;
	border-radius: 4px;
	padding: 24px;
	border: 4px solid
		${({ isLight }) =>
			isLight ? COLORS.primary.light : COLORS.background.medium};

	box-shadow: ${({ isLight }) => (isLight ? SHADOW.card : 'none')};

	p:first-child {
		color: var(--color-header);
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

export const Form = styled.form<IFormProps>`
	display: flex;
	flex-direction: column;

	input {
		width: 100%;
		padding: 12px 16px;
		border: none;

		${({ isLight }) =>
			isLight &&
			css`
				border: 1px solid ${COLORS.primary.dark};
			`}

		border-radius: 4px;
		color: ${COLORS.text.light};
		background: var(--color-input);
		margin-bottom: 16px;
		font-size: 1.6rem;

		&::placeholder,
		&::-webkit-input-placeholder,
		&::-moz-placeholder {
			color: ${COLORS.text.light};
			opacity: 1;
		}

		&:focus {
			outline: none;
			border: 1px solid ${COLORS.primary.dark};
		}
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus {
		-webkit-text-fill-color: var(--color-text);
		-webkit-box-shadow: ${SHADOW.card} var(--color-input) inset;

		box-shadow: ${SHADOW.card} var(--color-input) inset;

		transition: background-color 5000s ease-in-out 0s;
	}

	${mediaQueries.tabletUp} {
		flex-direction: row;
		justify-content: space-between;
		gap: 20px;

		input {
			margin-bottom: 0;
			padding: 16px;
		}
	}
`

export const Button = styled.button<IButtonProps>`
	padding: 12px 0;
	border: none;
	border-radius: 4px;
	background: ${COLORS.primary.dark};
	color: ${COLORS.input.light};
	font-weight: 600;
	cursor: pointer;
	box-shadow: ${SHADOW.card};
	transition: all 0.3s ease-in-out;

	${mediaQueries.tabletUp} {
		width: 40%;
		font-size: 1.6rem;
	}

	${mediaQueries.laptopUp} {
		&:hover {
			box-shadow: ${SHADOW.hover};
			transform: scale(1.08);
		}
	}
`
