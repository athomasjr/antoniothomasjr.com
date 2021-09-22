import React from 'react'
import { Helmet } from 'react-helmet'

interface ITwitterProps {
	type?: 'summary_large_image' | 'summary'
	handle?: string | null
	title: string
	description: string
	image: string
}

export default function Twitter({
	type = 'summary',
	handle = null,
	title,
	description,
	image,
}: ITwitterProps) {
	return (
		<Helmet>
			{handle && <meta name='twitter:creator' content={handle} />}
			<meta name='twitter:card' content={type} />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
			<meta name='twitter:image:alt' content={description} />
		</Helmet>
	)
}
