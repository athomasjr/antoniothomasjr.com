import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { aboutContent } from './about-content'
import * as S from './styles'

export default function About() {
	const [inViewRef, inView] = useInView({
		// rootMargin: '0px 0px -420px 0px',
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<S.Container ref={inViewRef} id='about'>
			{aboutContent.heading}
			<S.Content
				initial={{
					gridColumn: `1/2`,
					x: '-100%',
					opacity: 0,
				}}
				animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
				transition={{ duration: 1, ease: 'anticipate' }}
			>
				{aboutContent.content}
			</S.Content>
			<S.ImageContainer
				initial={{
					gridColumn: `2/3`,
					x: '100%',
					opacity: 0,
				}}
				animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
				transition={{ duration: 1, ease: 'anticipate', delay: 0.5 }}
			>
				<StaticImage
					style={{ borderRadius: '5px' }}
					src='../../images/about.jpeg'
					alt='Antonio and wife with red barn in the background'
					loading='lazy'
				/>
			</S.ImageContainer>
		</S.Container>
	)
}
