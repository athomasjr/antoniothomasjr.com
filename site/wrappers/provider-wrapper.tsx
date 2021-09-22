import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import SubscribeForm from '../../src/components/subscribe-form/index'

const MDXComponents = {
	SubscribeForm,
}

const providerWrapper = ({ element }) => (
	<MDXProvider components={MDXComponents}>{element}</MDXProvider>
)

export default providerWrapper
