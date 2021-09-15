import { SEO } from 'components'
import { About, Contact, Hero, Projects, RecentWork } from 'components/sections'
import React from 'react'

export default function IndexPage() {
	return (
		<>
			<SEO />
			<Hero />
			<RecentWork />
			<About />
			<Projects />
			<Contact />
		</>
	)
}
