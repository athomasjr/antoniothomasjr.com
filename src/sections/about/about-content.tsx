import React from 'react'
import { SectionTitle } from 'styles/typography'

export interface AboutContent {
	heading: JSX.Element
	content: JSX.Element
}

export const aboutContent: AboutContent = {
	heading: <SectionTitle>My Story</SectionTitle>,

	content: (
		<>
			<p>
				My name is Antonio, and I'm a self-taught web developer and writer from
				Wisconsin. I'm also a father, husband, fitness competitor, "amateur"
				amateur bass fisherman, and small-business owner... Phew, that was a
				mouth full 😅
			</p>

			<p>
				My journey into web development is fascinating; let's say the travel
				wasn't a direct route. However, the motivation to bring creative thought
				to life has always been there (creative writing major ✋🏾), and those
				skill sets have certainly transferred over.
			</p>

			<p>
				My first experience with web development was researching changing the
				background colors of a WordPress site. I later gravitated towards HTML
				and CSS, and here we are today.
			</p>
		</>
	),
}
