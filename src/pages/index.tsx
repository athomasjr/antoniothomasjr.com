import loadable from '@loadable/component'
import SEO from 'components/seo'
import React from 'react'
import Hero from 'sections/hero'

const Contact = loadable(() => import('sections/contact'))
const About = loadable(() => import('sections/about'))
const RecentWork = loadable(() => import('sections/recent-work'))
const Skills = loadable(() => import('sections/skills'))
const Projects = loadable(() => import('sections/projects'))

const IndexPage = () => (
	<>
		<SEO title='Web Developer &amp; Writer' twitterType='summary_large_image' />
		<Hero />
		<Skills />
		<About />
		<RecentWork />
		<Projects />
		<Contact />
	</>
)

export default IndexPage
