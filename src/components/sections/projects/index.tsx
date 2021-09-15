import { ProjectCard } from 'components'
import { projectData } from 'data'
import React from 'react'
import * as styles from './projects.module.scss'

export default function Projects() {
	const projectSection =
		projectData.length > 1 ? (
			<section id='work' className={styles.projects}>
				<h2>My Work</h2>
				{projectData.slice(1).map(project => (
					<ProjectCard
						key={`${project.title}-${project.url}`}
						project={project}
					/>
				))}
			</section>
		) : null

	return projectSection
}
