import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

type Technology =
	| 'React'
	| 'Gatsby'
	| 'Sass/Scss'
	| 'styled-components'
	| 'Svelte'
type Responsibility = 'Full design & development' | 'development'

export interface Project {
	title: string
	description: string
	stack: Technology[]
	responsibility: Responsibility
	image: JSX.Element
	// image2: JSX.Element
	url: string
}

export const projectData: Project[] = [
	{
		title: 'Lotus Solutions',
		description:
			'Web development services for small to medium-size businesses; change how your customers define "experience" because they deserve it.',
		stack: ['Svelte', 'Sass/Scss'],
		responsibility: 'development',
		image: (
			<StaticImage
				src='../../images/projects/lotussolutions/lotusprojectimg.png'
				alt='Lotus Solutions website header section'
				style={{ borderRadius: '4px' }}
			/>
		),
		url: 'https://www.lotussolutions.io',
	},
	{
		title: 'Krazy Kats Club',
		description:
			'KrazyKatsClub is your one place to mint your KrazyKats_NFT and join an amazing group of NFT and crypto enthusiasts.',
		stack: ['styled-components', 'Gatsby'],
		responsibility: 'development',
		image: (
			<StaticImage
				src='../../images/projects/krazy-kats-club/kkc.jpeg'
				alt='Krazy Kats Club website hero section'
				style={{ borderRadius: '4px' }}
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
		// image1: (
		// 	<StaticImage
		// 		src='../../assets/images/projects/read-eat-sleep-repeat/resp3.png'
		// 		alt='Read Sleep Sat Repeat page with book ratings'
		// 		style={{ borderTopLeftRadius: '4px', borderBottomRightRadius: '20px' }}
		// 	/>
		// ),
		image: (
			<StaticImage
				src='../../images/projects/read-eat-sleep-repeat/resp1.png'
				alt='Read Sleep Eat Repeat website'
				style={{ borderRadius: '4px' }}
			/>
		),

		url: 'https://www.readsleepeatrepeat.com/',
	},
]
