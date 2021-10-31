import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as S from './styles'

export default function Hero() {
	return (
		<S.Container>
			<S.ImageWrapper>
				<S.Image>
					<StaticImage
						src='../../images/hero7.png'
						alt='Antonio in a white collared shirt and blue tie with purple background'
						loading='eager'
					/>
				</S.Image>
			</S.ImageWrapper>
			<S.Content>
				<h1>
					Web Developer&nbsp;
					<S.Amp
						animate={{ rotate: -30 }}
						transition={{
							delay: 1,
							type: 'spring',
							bounce: 0.5,
						}}
					>
						&amp;
					</S.Amp>
					<br />
					Writer
				</h1>
				<h2>I Help Bring Dreams to Life</h2>
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
						Contact Antonio
					</AnchorLink>
				</S.CTA>
			</S.Content>
		</S.Container>
	)
}
