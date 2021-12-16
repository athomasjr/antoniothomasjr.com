import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

type Technology =
	| 'React'
	| 'Gatsby'
	| 'Sass/Scss'
	| 'styled-components'
	| 'Svelte'
	| 'GraphQl'
	| 'Apollo'
	| 'MongoDB'
	| 'TypeScript'
	| 'Express'
type Responsibility = 'Full design & development' | 'development'

export interface Project {
	title: string
	description: string
	stack: Technology[]
	responsibility: Responsibility
	featuredImage?: JSX.Element
	image: JSX.Element
	url?: string
	sourceCode?: string
	isFeatured?: true | false | undefined
}

const imageStyles = {
	style: { borderRadius: '4px' },
}

export const projectData: Project[] = [
	{
		title: 'Lotus Solutions',
		description:
			'Web development services for small to medium-size businesses; change how your customers define "experience" because they deserve it.',
		stack: ['Svelte', 'Sass/Scss'],
		responsibility: 'Full design & development',
		featuredImage: (
			<StaticImage
				src='../../images/projects/lotussolutions/lotusprojectimg.png'
				alt='Lotus Solutions website header section'
				style={{ borderRadius: '4px' }}
			/>
		),
		image: (
			<StaticImage
				src='../../images/projects/lotussolutions/lotussolutions-ogimage.jpeg'
				alt='Lotus Solutions website'
				{...imageStyles}
			/>
		),
		url: 'https://www.lotussolutions.io',
		isFeatured: true,
	},
	{
		title: 'Nutrition Tracker',
		sourceCode: 'https://github.com/athomasjr/fitness-app',
		description:
			'A Nutrition tracker built in TypeScript with MongoDb, Express, React, GraphQL and the Food Center API.',
		stack: ['Express', 'TypeScript', 'MongoDB', 'GraphQl', 'React'],
		responsibility: 'Full design & development',
		image: (
			<StaticImage
				src='../../images/projects/nutrition-tracker/nutrition-tracker-thumbnail.jpeg'
				alt='Nutrition Tracker'
				{...imageStyles}
			/>
		),
	},
	{
		title: 'Krazy Kats Club',
		description:
			'KrazyKatsClub is your one place to mint your KrazyKats_NFT and join an amazing group of NFT and crypto enthusiasts.',
		stack: ['styled-components', 'Gatsby'],
		responsibility: 'development',
		featuredImage: (
			<StaticImage
				src='../../images/projects/krazy-kats-club/kkc.jpeg'
				alt='Krazy Kats Club website hero section'
				style={{ borderRadius: '4px' }}
			/>
		),
		image: (
			<StaticImage
				src='../../images/projects/krazy-kats-club/kkc.jpeg'
				alt='Nutrition Tracker'
				{...imageStyles}
			/>
		),

		url: 'https://krazykatsclub.com/',
	},
	{
		title: 'Read Sleep Eat Repeat',
		description:
			'A blog to check out books that are worth reading and books to skip with honest feedback from Read Eat Sleep Repeat',
		stack: ['Gatsby', 'React', 'Sass/Scss'],
		responsibility: 'Full design & development',

		featuredImage: (
			<StaticImage
				src='../../images/projects/read-eat-sleep-repeat/resp1.png'
				alt='Read Sleep Eat Repeat website'
				style={{ borderRadius: '4px' }}
			/>
		),
		image: (
			<StaticImage
				src='../../images/projects/read-eat-sleep-repeat/resp1.png'
				alt='Read Sleep Eat Repeat website'
				{...imageStyles}
			/>
		),
		url: 'https://www.readsleepeatrepeat.com/',
	},
]
