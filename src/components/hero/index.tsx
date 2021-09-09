import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { heroContent } from './hero-content'
import * as styles from './hero.module.scss'

export default function Hero() {
	return (
		<div className={styles.hero}>
			<StaticImage
				src='../../images/hero7.png'
				alt='Close-up of Antonio'
				className={styles.img_container}
				loading='eager'
			/>

			<div className={styles.content}>
				{/* <h1>
					{heroContent.greeting}
					<span className={styles.waving_hand}>👋🏾</span>
				</h1> */}
				<h1>{heroContent.heading}</h1>
				<h2>{heroContent.subHead}</h2>
				{/* <AnchorLink to='/#contact' className={styles.cta}>
					{heroContent.cta}
				</AnchorLink> */}
				<div className={styles.cta}>
					<span className={styles.waving_hand}>👋🏾</span>
					<AnchorLink to='/#contact'>{heroContent.cta}</AnchorLink>
				</div>
			</div>
		</div>
	)
}
