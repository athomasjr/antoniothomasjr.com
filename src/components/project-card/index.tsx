import { Project } from 'data'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import * as S from './styles'

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
		<S.ProjectCard
			ref={inViewRef}
			href={project.url}
			target='_blank'
			rel='noopener noreferrer'
			inView={inView}
		>
			<S.Project>
				<article>
					<S.Content>
						<h3>{project.title}</h3>
						<p>{project.description}</p>
						<ul>
							{project.stack.map(tech => (
								<li key={`${project.title}-${tech}`}>{tech}</li>
							))}
						</ul>
						<p>{project.responsibility}</p>
					</S.Content>
					<S.FirstImage>{project.image1}</S.FirstImage>
					<S.SecondImage>{project.image2}</S.SecondImage>
				</article>
			</S.Project>
		</S.ProjectCard>
	)
}
