/* eslint-disable @typescript-eslint/no-explicit-any */
import classNames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { HiCode } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'
import { aboutContent } from './about-content'
import * as styles from './about.module.scss'

export default function About() {
	const [inViewRef, inView] = useInView({
		rootMargin: '0px 0px -400px 0px',
		triggerOnce: true,
	})

	return (
		<section ref={inViewRef} id='about' className={styles.about}>
			<div
				className={classNames(styles.from_left, {
					[styles.appear]: inView,
				})}>
				<h2>{aboutContent.heading}</h2>
				<p>{aboutContent.content1}</p>
				<p>{aboutContent.content2}</p>
			</div>
			<div
				// ref={setRefs}
				className={classNames(styles.from_right, {
					[styles.appear]: inView,
				})}>
				<StaticImage
					className={styles.img_container}
					imgClassName={styles.img}
					src='../../images/about-pic-3.png'
					alt='Antonio holding infant son'
					loading='lazy'
				/>
				<div>
					<h3>Tools I use &#58;</h3>
					<ul>
						{aboutContent.skills.map(skill => (
							<li key={skill}>
								<HiCode />
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}
