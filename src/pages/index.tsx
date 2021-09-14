import About from 'components/sections/about'
import Contact from 'components/sections/contact'
import Hero from 'components/sections/hero'
import Projects from 'components/sections/projects'
import RecentWork from 'components/sections/recent-work'
import Seo from 'components/seo'
import React from 'react'

export default function IndexPage() {
	return (
		<>
			<Seo />
			<Hero />
			<RecentWork />
			<About />
			<Projects />
			<Contact />
		</>
	)
}
