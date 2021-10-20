import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import React from 'react'
import { BlogImg, Code, PostCovers } from '../../src/components/blog'
import { ThemeProvider } from '../../src/context/theme'
import { Header, Highlight } from '../../src/styles'

const MDXComponents = {
	pre: preProps => {
		const props = preToCodeBlock(preProps)
		if (props) {
			return <Code {...props} />
		}
		return <pre {...preProps} />
	},
	Highlight,
	Header,
	BlogImg,
	PostCovers,
}

const providerWrapper = ({ element }) => (
	<ThemeProvider>
		<MDXProvider components={MDXComponents}>{element}</MDXProvider>
	</ThemeProvider>
)

export default providerWrapper
