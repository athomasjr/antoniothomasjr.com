import styled from 'styled-components'
import { COLORS, FONTS, mediaQueries, PADDING } from 'styles'

export const Container = styled.article`
	display: flex;
	flex-direction: column;
	max-width: 680px;
	padding: ${PADDING.page.phone};
	margin: 0 auto;

	h1 {
		color: ${COLORS.text.header};
		margin-bottom: 12px;
	}
	h3 {
		font-family: ${FONTS.header};
	}

	h1,
	h2,
	h3 {
		font-weight: 600;
	}

	h2,
	h3,
	h4 {
		color: ${COLORS.text.header};
	}

	p,
	ul,
	ol {
		font-size: 1.5rem;
	}

	ol,
	ul {
		padding-left: 1em;
		list-style-position: outside !important;
	}

	ol > li {
		padding-left: 4px;
		margin-bottom: 4px;
	}

	ul > li {
		margin-left: 4px;
	}

	li::marker {
		color: ${COLORS.tag.white};
	}

	a {
		color: ${COLORS.primary.light};
		text-decoration: underline;
	}

	blockquote {
		padding: 0 8px;
		color: ${COLORS.text.header};
		border-left: 0.3rem solid ${COLORS.text.light};
		margin-left: 0;
		display: inline-block;
		margin-bottom: 24px;
	}

	${mediaQueries.tabletUp} {
		padding: 80px 16px;
		h1 {
			font-size: 4rem;
		}
		p,
		ul,
		ol {
			font-size: 1.6rem;
		}
	}

	${mediaQueries.tabletLand} {
		width: 55%;
	}

	${mediaQueries.laptopUp} {
		p,
		ul,
		ol {
			font-size: 1.8rem;
		}
	}
`

export const FormContainer = styled.div`
	margin: 16px 0;
`
