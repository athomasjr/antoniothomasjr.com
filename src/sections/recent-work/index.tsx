import classNames from 'classnames'
import { projectData } from 'data'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import * as styles from './recent-work.module.scss'

export default function RecentWork() {
	const project = projectData[0]
	const [inViewRef, inView] = useInView({
		// rootMargin: '0px 0px -420px 0px',
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<section id='recent-work' ref={inViewRef} className={styles.recent_work}>
			<h2
				// style={{ opacity: 0 }}
				className={classNames(styles.invisible, {
					[styles.tracking_in_expand_fwd_bottom]: inView,
				})}
			>
				Recent Work
			</h2>
			{/* <motion.div
				className={classNames(styles.circle, styles.small)}
				initial={{ x: -300, opacity: 0 }}
				animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
				transition={{ type: 'spring', bounce: 0.6, delay: 0.8 }}
			/> */}

			<div className={styles.img_container}>{project.image2}</div>
			<div className={styles.info_container}>
				<h3>{project.title}</h3>
				<p>{project.description}</p>

				<motion.a
					whileHover={{
						scale: 1.2,
						y: '-10%',
						transition: { duration: 0.3 },
					}}
					className={styles.cta}
					href={project.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					Check it out <span>&rarr;</span>
				</motion.a>
			</div>
			<div className={styles.card}>
				<p>{project.responsibility}</p>
				<ul>
					{project.stack.map(tech => (
						<li key={`${project.title}-${tech}`}>{tech}</li>
					))}
				</ul>
			</div>
			{/* <div className={classNames(styles.circle, styles.big)} /> */}
		</section>
	)
}
