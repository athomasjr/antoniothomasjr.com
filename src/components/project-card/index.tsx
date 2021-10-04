import classNames from 'classnames'
import { Project } from 'data'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import * as styles from './project-card.module.scss'

interface ProjectCardProps {
	project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const [inViewRef, inView] = useInView({
		rootMargin: '0px 0px -200px 0px',
		triggerOnce: true,
		// threshold: 1,
	})
	return (
		<a
			ref={inViewRef}
			href={project.url}
			target='_blank'
			rel='noopener noreferrer'
			className={classNames(styles.fade_in, { [styles.appear]: inView })}
		>
			<div className={styles.project_card}>
				<article>
					<div className={styles.content}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<ul>
							{project.stack.map(tech => (
								<li key={`${project.title}-${tech}`}>{tech}</li>
							))}
						</ul>
						<p>{project.responsibility}</p>
					</div>
					<div className={styles.image1_container}>{project.image1}</div>
					<div className={styles.image2_container}>{project.image2}</div>
				</article>
			</div>
		</a>
	)
}
