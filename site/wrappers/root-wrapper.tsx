import React from 'react'
import Layout from '../../src/layouts/layout'
import GlobalStyles from '../../src/styles/global-styles'
const rootWrapper = ({ element }) => (
	<>
		<Layout>
			<GlobalStyles />
			{element}
		</Layout>
	</>
)

export default rootWrapper
