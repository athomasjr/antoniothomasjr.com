import { WrapPageElementBrowserArgs } from 'gatsby'
import React from 'react'
import Layout from '../../src/layouts/layout'
import GlobalStyles from '../../src/styles/GlobalStyles'

const rootWrapper = ({ element }: WrapPageElementBrowserArgs) => (
	<>
		<Layout>
			<GlobalStyles />
			{element}
		</Layout>
	</>
)

export default rootWrapper
