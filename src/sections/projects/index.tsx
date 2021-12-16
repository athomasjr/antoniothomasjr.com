import ProjectCard from 'components/project-card/indes'
import { projectData } from 'data'
import React from 'react'
import { SectionTitle } from 'styles/typography'
import * as S from './styles'

export default function Projects() {
	const projects = projectData.filter(project => project.isFeatured !== true)

	const renderProjects = () =>
		projects.map((project, idx) => (
			<ProjectCard key={project.title} project={project} idx={idx} />
		))

	return (
		<S.Container>
			<SectionTitle>
				My <span>Projects</span>
			</SectionTitle>
			<S.ProjectsContainer>{renderProjects()}</S.ProjectsContainer>
		</S.Container>
	)
}
