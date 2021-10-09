import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { COLORS, FONTS } from 'styles'

const GlobalStyles = createGlobalStyle`
${reset}


*,
*::before,
*::after {
	box-sizing: inherit;
}


body,
html {
	/* overflow: hidden !important; */
	/* overflow-y: auto !important; */
}

html {
	box-sizing: border-box;
	font-size: 62.5%;
}

body {
	font-family: ${FONTS.body};
	position: relative;
	background-color: var(--color-background);
	line-height: 1.75;
	font-weight: 400;
	color: var(--color-text);
}

p {
	margin-bottom: 1.2rem;
	font-size: 2rem;
}

h1,
h2,
h3,
h4,
h5 {
	margin: 3rem 0 1.38rem;
	font-weight: 600;
	line-height: 1.3;
	font-family: ${FONTS.header};
	color: var(--color-header);

}

h1 {
	margin-top: 0;
	font-size: 3.052rem;
}

h2 {
	font-size: 2.441rem;
}

h3 {
	font-size: 1.953rem;
}

h4 {
	font-size: 1.563rem;
}

h5 {
	font-size: 1.25rem;
}

small,
.text_small {
	font-size: 0.8rem;
}

a {
	text-decoration: none;
	color: inherit;
}


body::-webkit-scrollbar {
	width: 12px;
	background: ${COLORS.primary.dark};
}

body::-webkit-scrollbar-thumb {
	background-color: ${COLORS.background.dark};
	border-radius: 20px;
	border: 3px solid ${COLORS.primary.dark};
}

* {
	scrollbar-width: thin;
	scrollbar-color: ${COLORS.background.dark} ${COLORS.primary.dark};
}

`

export default GlobalStyles
