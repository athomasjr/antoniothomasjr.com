import { projectData } from 'data'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import * as S from './styles'

export default function RecentWork() {
	const project = projectData[0]
	const [inViewRef, inView] = useInView({
		// rootMargin: '0px 0px -420px 0px',
		threshold: 0.2,
		triggerOnce: true,
	})

	return (
		<S.Container id='recent-work' ref={inViewRef}>
			<S.Header inView={inView}>Recent Work</S.Header>

			<S.Image>{project.image2}</S.Image>
			<S.Info>
				<h3>{project.title}</h3>
				<p>{project.description}</p>

				<S.CTA
					whileHover={{
						scale: 1.2,
						y: '-10%',
						transition: { duration: 0.3 },
					}}
					href={project.url}
					target='_blank'
					rel='noopener noreferrer'
				>
					Check it out <span>&rarr;</span>
				</S.CTA>
			</S.Info>
			<S.Card>
				<p>{project.responsibility}</p>
				<ul>
					{project.stack.map(tech => (
						<li key={`${project.title}-${tech}`}>{tech}</li>
					))}
				</ul>
			</S.Card>
		</S.Container>
	)
}
