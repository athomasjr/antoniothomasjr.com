import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { BlogImg } from '../../src/components'
import { ThemeProvider } from '../../src/context/theme'
import { Header, Highlight } from '../../src/styles'

const MDXComponents = { Highlight, Header, BlogImg }

const providerWrapper = ({ element }) => (
	<ThemeProvider>
		<MDXProvider components={MDXComponents}>{element}</MDXProvider>
	</ThemeProvider>
)

export default providerWrapper
