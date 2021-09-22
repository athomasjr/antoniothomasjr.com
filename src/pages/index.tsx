import { SEO } from 'components'
import { About, Contact, Hero, Projects, RecentWork } from 'components/sections'
import React from 'react'

export default function IndexPage() {
	return (
		<>
			<SEO title='Welcome to My Home Page' />
			<Hero />
			<RecentWork />
			<About />
			<Projects />
			<Contact />
		</>
	)
}
