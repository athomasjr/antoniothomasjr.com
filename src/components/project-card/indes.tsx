import { Project } from 'data'
import React, { useCallback, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import * as S from './styles'

interface ProjectCardProps {
	project: Project
	idx: number
}

export default function ProjectCard({ project, idx }: ProjectCardProps) {
	const ref = useRef()
	const [inViewRef, inView] = useInView({ triggerOnce: true, threshold: 0.5 })

	const setRefs = useCallback(
		node => {
			ref.current = node
			inViewRef(node)
		},
		[inViewRef],
	)

	return (
		<S.ProjectCard
			ref={setRefs}
			initial={{ opacity: 1, translateY: -100, translateX: -100 }}
			animate={
				inView ? { opacity: 1, translateY: 0, translateX: 0 } : { opacity: 0 }
			}
			transition={
				inView ? { duration: 0.3, delay: idx * 0.3 } : { duration: 0, delay: 0 }
			}
		>
			{project.image}
			<S.InfoContainer>
				<h3>{project.title}</h3>
				<p>{project.description}</p>
			</S.InfoContainer>
			<S.ButtonsContainer>
				{project.sourceCode && (
					<S.Button
						href={project.sourceCode}
						target='_blank'
						rel='noopener noreferrer'
					>
						Source
					</S.Button>
				)}

				{project.url && (
					<S.Button
						href={project.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						Live
					</S.Button>
				)}
			</S.ButtonsContainer>
		</S.ProjectCard>
	)
}
