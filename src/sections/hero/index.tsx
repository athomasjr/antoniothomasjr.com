import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { heroContent } from './hero-content'
import * as S from './styles'

export default function Hero() {
	return (
		<S.Container>
			<S.Image>
				<StaticImage
					src='../../assets/images/hero7.png'
					alt='Antonio in a white collared shirt and blue tie with purple background'
					loading='eager'
				/>
			</S.Image>
			<S.Content>
				<h1>{heroContent.heading}</h1>
				<h2>{heroContent.subHead}</h2>
				<S.CTA
					whileHover={{
						scale: 1.1,
						y: '-5%',
						transition: { ease: 'easeInOut' },
					}}
					whileTap={{ scale: 0.8 }}
				>
					<S.Hand>👋🏾</S.Hand>
					<AnchorLink stripHash to='/#contact'>
						{heroContent.cta}
					</AnchorLink>
				</S.CTA>
			</S.Content>
		</S.Container>
	)
}
