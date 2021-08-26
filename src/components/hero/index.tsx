import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { heroContent } from './hero-content'
import * as styles from './hero.module.scss'

export default function Hero() {
	return (
		<div className={styles.hero}>
			<StaticImage
				src='../../images/hero-3.png'
				alt='Antonio profile'
				className={styles.img}
			/>

			<div>
				<h1>
					{heroContent.greeting}
					<span className={styles.waving_hand}>👋🏾</span>
				</h1>
				<p>{heroContent.intro}</p>
				<AnchorLink to='/#contact' className={styles.cta}>
					{heroContent.cta}
				</AnchorLink>
			</div>
		</div>
	)
}
