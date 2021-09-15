import React from 'react'
import { Helmet } from 'react-helmet'

interface IFacebookProps {
	url: string
	locale: string
	type?: 'website' | 'article'
	title: string
	description: string
	image: string
	name?: string | null
}

export default function Facebook({
	url,
	name = null,
	type = 'website',
	title,
	description,
	image,
	locale,
}: IFacebookProps) {
	return (
		<Helmet>
			{name && <meta property='og:site_name' content={name} />}
			<meta property='og:locale' content={locale} />
			<meta property='og:url' content={url} />
			<meta property='og:type' content={type} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			<meta property='og:image:alt' content={description} />
		</Helmet>
	)
}
