import { TwitterShare } from 'components'
import styled from 'styled-components'
import { COLORS, FONTS, mediaQueries } from 'styles'

export const Title = styled.h1`
	font-size: 3rem;

	${mediaQueries.tabletUp} {
		font-size: ${FONTS.size.tablet_header};
	}
	${mediaQueries.laptopUp} {
		font-size: ${FONTS.size.laptop_header};
	}
`

export const Article = styled.article`
	margin: 0 auto;
	padding: 56px 0;
	max-width: 90%;

	${mediaQueries.tabletUp} {
		width: 672px;
	}
`

export const Content = styled.div`
	p,
	ul,
	ol {
		margin-bottom: 24px;
	}

	li {
		&::marker {
			color: ${COLORS.primary.light};
		}
	}

	p,
	li {
		font-size: 1.6rem;
	}

	h2,
	h3,
	h4 {
		color: ${COLORS.text.header};
	}

	ol {
		list-style: decimal;
	}

	ul {
		list-style-type: disc;
	}

	ol,
	ul {
		/* margin-bottom: 16px; */
		list-style-position: inside;
	}

	a {
		color: ${COLORS.primary.light};
		text-decoration: underline;
	}

	blockquote {
		padding: 8px 8px 0;
		color: ${COLORS.text.light};
		border-left: 0.3rem solid ${COLORS.background.medium};
		display: inline-block;
		margin-bottom: 24px;
	}
`

export const FormContainer = styled.div`
	margin: 16px 0;
`

export const TwitterShareContainer = styled.div``

export const StyledTwitterShare = styled(TwitterShare)`
	${mediaQueries.mdPhoneDown} {
		margin: 0 auto;
		width: 100%;
		justify-content: center;
	}
`
