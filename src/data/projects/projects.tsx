import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

type Technology = 'React' | 'Gatsby' | 'Sass/Scss'
type Responsibility = 'Full design & development'

export interface Project {
	title: string
	description: string
	stack: Technology[]
	responsibility: Responsibility
	image1: JSX.Element
	image2: JSX.Element
	url: string
}

export const projectData: Project[] = [
	{
		title: 'Read Sleep Eat Repeat',
		description:
			'A blog to check out books that are worth reading and books to skip with honest feedback from Read Eat Sleep Repeat',
		stack: ['Gatsby', 'React', 'Sass/Scss'],
		responsibility: 'Full design & development',
		image1: (
			<StaticImage
				src='../../images/projects/read-eat-sleep-repeat/resp3.png'
				alt='test'
				style={{ borderTopLeftRadius: '4px', borderBottomRightRadius: '20px' }}
			/>
		),
		image2: (
			<StaticImage
				src='../../images/projects/read-eat-sleep-repeat/resp1.png'
				alt='test'
				style={{ borderRadius: '4px' }}
			/>
		),

		url: 'https://www.readsleepeatrepeat.com/',
	},
]
