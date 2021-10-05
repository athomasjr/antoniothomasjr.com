import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { Header, Highlight } from '../../src/styles'

const MDXComponents = { Highlight, Header }

const providerWrapper = ({ element }) => (
	<MDXProvider components={MDXComponents}>{element}</MDXProvider>
)

export default providerWrapper
