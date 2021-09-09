import { projectData } from 'data'
import React from 'react'
import ProjectCard from './project-card'
import * as styles from './projects.module.scss'

export default function Projects() {
	return (
		<section id='work' className={styles.projects}>
			<h2>My Work</h2>
			{projectData.map(project => (
				<ProjectCard
					key={`${project.title}-${project.url}`}
					project={project}
				/>
			))}
		</section>
	)
}
