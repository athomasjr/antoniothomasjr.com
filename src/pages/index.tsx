import { SEO } from 'components'
import React from 'react'
import { About, Contact, Hero, Projects, RecentWork } from 'sections'

export default function IndexPage() {
	return (
		<>
			<SEO title='Welcome to My Home Page' twitterType='summary_large_image' />
			<Hero />
			<RecentWork />
			<About />
			<Projects />
			<Contact />
		</>
	)
}
