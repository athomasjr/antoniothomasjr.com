import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { SHADOW } from 'styles'

interface IBlogImgProps {
	image: ImageDataLike
	alt: string
}

const StyledImage = styled(GatsbyImage)`
	box-shadow: ${SHADOW.card};
	margin: 16px 0;
	border-radius: 4px;
`

export default function BlogImg({ image, alt }: IBlogImgProps) {
	const pluginImg = getImage(image)
	return <StyledImage alt={alt} image={pluginImg!} />
}
