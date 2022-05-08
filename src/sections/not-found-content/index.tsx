import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as S from './styles'

export default function NotFoundContent() {
	return (
		<S.Container>
			<h1>Oops! Looks like that page doesn't exist...</h1>
			<p>
				You were probably looking for
				<GatsbyLink to='/#work'> my work.</GatsbyLink>
			</p>
			<S.ImgContainer>
				<StaticImage
					src='../../assets/images/404-img.jpeg'
					alt='Small dog with glasses looking at laptop'
				/>
			</S.ImgContainer>
		</S.Container>
	)
}
