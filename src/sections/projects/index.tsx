import { ProjectCard } from 'components'
import { projectData } from 'data'
import React from 'react'
import * as S from './styles'

export default function Projects() {
	const projectSection =
		projectData.length > 1 ? (
			<S.Container id='work'>
				<h2>My Work</h2>
				{projectData.slice(1).map(project => (
					<ProjectCard
						key={`${project.title}-${project.url}`}
						project={project}
					/>
				))}
			</S.Container>
		) : null

	return projectSection
}
