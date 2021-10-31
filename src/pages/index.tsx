import loadable from '@loadable/component'
import { SEO } from 'components'
import React from 'react'
import { About, Hero, RecentWork } from 'sections'

const Contact = loadable(() => import('sections/contact'))

export default function IndexPage() {
	return (
		<>
			<SEO
				title='Web Developer &amp; Writer'
				twitterType='summary_large_image'
			/>
			<Hero />
			<RecentWork />
			<About />
			<Contact />
		</>
	)
}
