import React from 'react'

export interface AboutContent {
	heading: JSX.Element
	content: JSX.Element
}

export const aboutContent: AboutContent = {
	heading: <h2>My Story</h2>,

	content: (
		<>
			<p>
				My name is Antonio, and I'm a front-end developer from Wisconsin. I'm
				also a father, husband, writer, fitness competitor, and "amateur"
				amateur bass fisherman, and small-business owner. <br />
			</p>

			<p>
				My journey into web development is fascinating; let's say the travel
				wasn't a direct route. However, the motivation to bring creative thought
				to life has always been there (creative writing major ✋🏾), and those
				skill sets have certainly transferred over. <br />
			</p>

			<p>
				My first experience with web development was researching changing the
				background colors of a WordPress site. I later gravitated towards HTML
				and CSS, and here we are today.
			</p>
		</>
	),
}
