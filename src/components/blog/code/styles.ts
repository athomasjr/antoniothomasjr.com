import { Language } from 'prism-react-renderer'
import styled, { css, StyledProps } from 'styled-components'
import { ELEVATIONS } from 'styles'

interface IGatsbyHighlightProps {
	language: Language
	title?: string
}

export const Pre = styled.pre`
	text-align: left;
	margin: 1em 0;
	padding: 0.5em;
	overflow: scroll;

	border-radius: 0 0 4px 4px;
	box-shadow: ${ELEVATIONS.small};
`

export const Line = styled.div`
	display: table-row;
`

export const LineNo = styled.span`
	display: table-cell;
	text-align: right;
	padding-right: 1em;
	user-select: none;
	opacity: 0.3;
`

export const LineContent = styled.span`
	display: table-cell;
`

const setContent = ({ language }: StyledProps<IGatsbyHighlightProps>) => {
	if (language === 'javascript') {
		return css`
			content: 'js';
		`
	}

	if (language === 'typescript') {
		return css`
			content: 'ts';
		`
	}
	if (language === 'css') {
		return css`
			content: 'css';
		`
	}
	if (language === 'scss') {
		return css`
			content: 'scss';
		`
	}

	if (language === 'tsx') {
		return css`
			content: 'tsx';
		`
	}
	if (language === 'jsx') {
		return css`
			content: 'jsx';
		`
	}

	return null
}

const setTitle = ({ title }: StyledProps<IGatsbyHighlightProps>) => {
	if (title) {
		return css`
			&:before {
				width: 100%;
				background: var(--color-codeBg);
				height: 50px;
				content: '${title}';
				color: var(--color-header);
				position: absolute;
				top: -50px;
				border-radius: 4px 4px 0 0;
				padding: 8px;
				text-align: left;
				box-shadow: ${ELEVATIONS.small};
			}
		`
	}

	return null
}

export const GatsbyHighlight = styled.div<IGatsbyHighlightProps>`
	position: relative;
	-webkit-overflow-scrolling: touch;
	font-size: 1.8rem;
	margin: ${({ title }) => (title ? '90px' : '40px')} 0 40px;

	${setTitle};

	${({ title }) =>
		!title &&
		css`
			pre {
				border-radius: 4px;
			}
		`}

	pre:before {
		border-radius: 0 0 0.25rem 0.25rem;
		font-size: 1.6rem;
		letter-spacing: 0.025rem;
		padding: 0.1rem 0.5rem;
		position: absolute;
		right: 1rem;
		text-align: right;
		text-transform: uppercase;
		top: 0;
		background: var(--color-primary);
		color: var(--color-header);
		${setContent};
	}
`

export const Title = styled.div``
