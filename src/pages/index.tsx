import About from 'sections/about'
import Contact from 'sections/contact'
import Hero from 'sections/hero'
import Layout from 'components/layout'
import Projects from 'sections/projects'
import RecentWork from 'sections/recent-work'
import Seo from 'components/seo'
import React from 'react'

export default function IndexPage() {
	return (
		<>
			<Layout>
				<Seo />
				<Hero />
				<RecentWork />
				<About />
				<Projects />
				<Contact />
			</Layout>
		</>
	)
}
