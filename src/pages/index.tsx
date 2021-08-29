import Circles from 'components/common/circles'
import Hero from 'components/hero/index'
import Layout from 'components/layout'
import Seo from 'components/seo'
import React from 'react'
import About from '../components/about/index'
import Projects from '../components/projects/index'

export default function IndexPage() {
	return (
		<>
			<Layout>
				<Seo />
				<Hero />
				<About />
				<Projects />
				<Circles />
			</Layout>
		</>
	)
}
