import { getImage, ImageDataLike } from 'gatsby-plugin-image'
import React from 'react'
import * as S from './styles'

interface IBlogImgProps {
	image: ImageDataLike
	alt: string
	elevation?: 'md' | 'lg' | 'none'
}

export default function BlogImg({ image, alt, elevation }: IBlogImgProps) {
	const pluginImg = getImage(image)
	return <S.StyledImage elevation={elevation} alt={alt} image={pluginImg!} />
}
