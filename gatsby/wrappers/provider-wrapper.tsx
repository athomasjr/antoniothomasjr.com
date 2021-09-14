import { MDXProvider } from '@mdx-js/react'
import React from 'react'

const MDXComponents = {}

const providerWrapper = ({ element }) => (
	<MDXProvider components={MDXComponents}>{element}</MDXProvider>
)

export default providerWrapper
