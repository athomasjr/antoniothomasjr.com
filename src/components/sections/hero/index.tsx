import { motion } from 'framer-motion'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { heroContent } from './hero-content'
import * as styles from './hero.module.scss'

export default function Hero() {
	return (
		<div className={styles.hero}>
			<StaticImage
				src='../../../assets/images/hero7.png'
				alt='Close-up of Antonio'
				className={styles.img_container}
				loading='eager'
			/>
			<div className={styles.content}>
				<h1>{heroContent.heading}</h1>
				<h2>{heroContent.subHead}</h2>
				<motion.div
					whileHover={{
						scale: 1.1,
						y: '-5%',
						transition: { ease: 'easeInOut' },
					}}
					whileTap={{ scale: 0.8 }}
					className={styles.cta}>
					<span className={styles.waving_hand}>👋🏾</span>
					<AnchorLink stripHash to='/#contact'>
						{heroContent.cta}
					</AnchorLink>
				</motion.div>
			</div>
		</div>
	)
}
