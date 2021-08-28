import classNames from 'classnames'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { heroContent } from './hero-content'
import * as styles from './hero.module.scss'

export default function Hero() {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
	})

	return (
		<div className={styles.hero}>
			<StaticImage
				src='../../images/hero-3.png'
				alt='Close-up of Antonio'
				className={styles.img_container}
				loading='eager'
			/>

			<div
				ref={inViewRef}
				className={classNames(styles.from_right, { [styles.appear]: inView })}
			>
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
