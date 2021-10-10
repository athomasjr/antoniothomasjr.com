import styled, { css, StyledProps } from 'styled-components'
import { COLORS, FONTS, mediaQueries, PADDING, SHADOW } from 'styles'

interface IFormProps {
	isLight: boolean
}

const setFormBorder = ({ isLight }: StyledProps<IFormProps>) => {
	if (isLight) {
		return css`
			border: 1px solid ${COLORS.primary.light};
		`
	}

	return css`
		border: none;
	`
}

export const Form = styled.form<IFormProps>`
	display: flex;
	flex-direction: column;
	gap: 24px;

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus {
		-webkit-text-fill-color: var(--color-text);
		-webkit-box-shadow: ${SHADOW.card} var(--color-input) inset;

		box-shadow: ${SHADOW.card} var(--color-input) inset;
		transition: background-color 5000s ease-in-out 0s;
	}

	textarea,
	input {
		padding: 16px 16px 16px 20px;
		width: 100%;
		display: block;
		color: var(--color-text);
		background: var(--color-input);
		border-radius: 4px;
		font-size: 1.6rem;
		${setFormBorder}

		/* box-shadow: ${SHADOW.card}; */

		&::placeholder,
		&::-webkit-input-placeholder,
		&::-moz-placeholder {
			opacity: 1;
		}

		&:focus {
			outline: none;
			border: 1px solid ${COLORS.primary.dark};
		}
	}

	textarea {
		height: 80px;
		resize: none;
	}

	${mediaQueries.tabletUp} {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, auto);
		align-items: start;
		padding: ${PADDING.page.tablet};

		input,
		textarea {
			padding: 24px 16px 16px 24px;
		}

		textarea {
			height: 100px;
		}
	}

	${mediaQueries.laptopUp} {
		textarea {
			height: 150px;
		}
	}

	${mediaQueries.laptopXlUp} {
		input,
		textarea {
			padding: 24px 16px 24px 24px;
		}
		textarea {
			height: 200px;
		}
	}
`

export const Textarea = styled.textarea`
	font-family: ${FONTS.body};
`

export const Input = styled.input`
	&::placeholder,
	&::-webkit-input-placeholder,
	&::-moz-placeholder {
		color: var(--color-text) !important;
	}
`

export const MessageContainer = styled.div`
	${mediaQueries.tabletUp} {
		grid-area: 2/1/3/3;
	}
`
export const CTA = styled.button`
	background: ${COLORS.primary.dark};
	color: ${COLORS.input.light};
	text-transform: capitalize;
	border-radius: 4px;
	border: none;
	padding: 8px 0;
	cursor: pointer;
	font-size: 1.6rem;
	box-shadow: ${SHADOW.card};
	transition: all 0.3s ease-in-out;

	${mediaQueries.tabletUp} {
		font-size: 1.6rem;
		padding: 16px 0;
		width: 60%;
	}

	${mediaQueries.laptopUp} {
		&:hover {
			box-shadow: ${SHADOW.hover};
			transform: scale(1.08);
		}
	}
	${mediaQueries.laptopXlUp} {
		width: 50%;
	}
`

export const Error = styled.p`
	padding: 4px;
	border-radius: 4px;
	text-align: center;
	background-color: rgb(255, 249, 242);
	color: rgb(211, 0, 0);
	margin-top: 16px;

	${mediaQueries.laptopUp} {
		padding: 4px 12px;
		display: inline-block;
	}
`

export const FormErrorMsg = styled.div`
	display: flex;
	border-radius: 4px;
	color: ${COLORS.header.light};
	flex-direction: column;
	align-items: center;
	gap: 40px;

	${mediaQueries.laptopUp} {
		button {
			width: 30%;
		}
	}
`
