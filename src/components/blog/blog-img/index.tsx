import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import styled, { css, StyledProps } from 'styled-components'
import { ELEVATIONS } from 'styles'

interface IBlogImgProps {
	image: ImageDataLike
	alt: string
	elevation?: 'md' | 'lg' | 'none'
}

interface IStyledImageProps {
	elevation?: 'md' | 'lg' | 'none'
}

const setElevation = ({ elevation }: StyledProps<IStyledImageProps>) => {
	if (elevation === 'md') {
		return css`
			box-shadow: ${ELEVATIONS.medium};
		`
	}

	if (elevation === 'lg') {
		return css`
			box-shadow: ${ELEVATIONS.large};
		`
	}

	if (elevation === 'none') {
		return null
	}

	return css`
		box-shadow: ${ELEVATIONS.small};
	`
}

const StyledImage = styled(GatsbyImage)`
	${setElevation}
	margin: 16px 0;
	border-radius: 4px;
`

export default function BlogImg({ image, alt, elevation }: IBlogImgProps) {
	const pluginImg = getImage(image)
	return <StyledImage elevation={elevation} alt={alt} image={pluginImg!} />
}
