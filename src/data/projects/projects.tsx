import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaSass } from 'react-icons/fa'
import {
	SiApollographql,
	SiExpress,
	SiGatsby,
	SiGraphql,
	SiMongodb,
	SiNetlify,
	SiReact,
	SiSemanticuireact,
	SiStyledcomponents,
	SiSvelte,
	SiTypescript,
} from 'react-icons/si'

type Responsibility = 'Full design & development' | 'development'

export interface Project {
	title: string
	description: string
	stack: JSX.Element[]
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
		isFeatured: true,
		title: 'Lotus Solutions',
		url: 'https://www.lotussolutions.io',
		stack: [<SiSvelte />, <DiJavascript />, <FaSass />, <SiNetlify />],
		responsibility: 'Full design & development',
		description:
			'Web development services for small to medium-size businesses; change how your customers define "experience" because they deserve it.',
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
	},
	{
		title: 'Nutrition Tracker',
		stack: [
			<SiReact />,
			<SiTypescript />,
			<SiExpress />,
			<SiGraphql />,
			<SiApollographql />,
			<SiMongodb />,
			<SiSemanticuireact />,
		],
		sourceCode: 'https://github.com/athomasjr/fitness-app',
		responsibility: 'Full design & development',
		description:
			'A Nutrition tracker built in TypeScript with MongoDb, Express, React, GraphQL and the Food Center API.',
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
		stack: [
			<SiGatsby />,
			<DiJavascript />,
			<SiStyledcomponents />,
			<SiNetlify />,
		],

		description:
			'KrazyKatsClub is your one place to mint your KrazyKats_NFT and join an amazing group of NFT and crypto enthusiasts.',
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
		stack: [<SiGatsby />, <SiTypescript />, <FaSass />, <SiNetlify />],

		description:
			'A blog to check out books that are worth reading and books to skip with honest feedback from Read Eat Sleep Repeat',
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
