import Hero from 'components/hero/index'
import Layout from 'components/layout'
import Seo from 'components/seo'
import React from 'react'

export default function IndexPage() {
	return (
		<Layout>
			<Seo />
			<Hero />
		</Layout>
	)
}
