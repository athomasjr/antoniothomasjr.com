import { motion } from 'framer-motion'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { aboutContent } from './about-content'
import * as styles from './about.module.scss'

export default function About() {
	const [inViewRef, inView] = useInView({
		// rootMargin: '0px 0px -420px 0px',
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<section ref={inViewRef} id='about' className={styles.about}>
			{aboutContent.heading}
			<motion.div
				className={styles.content}
				initial={{
					gridColumn: `1/2`,
					x: '-100%',
					opacity: 0,
				}}
				animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
				transition={{ duration: 1, ease: 'anticipate' }}>
				{/* <p>{aboutContent.content1}</p>
				<p>{aboutContent.content2}</p> */}
				{aboutContent.content}
			</motion.div>
			<motion.div
				className={styles.img_container}
				initial={{
					gridColumn: `2/3`,
					x: '100%',
					opacity: 0,
				}}
				animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
				transition={{ duration: 1, ease: 'anticipate', delay: 0.5 }}>
				<StaticImage
					imgClassName={styles.img_class}
					src='../../../assets/images/about.jpeg'
					alt='Antonio and wife with red barn in the background'
					loading='lazy'
				/>
			</motion.div>
		</section>
	)
}
