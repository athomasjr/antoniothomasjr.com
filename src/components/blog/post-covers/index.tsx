import React from 'react'
import * as S from './styles'

interface IPostCoversProps {
	topics: string[]
	intendedFor: string
}

export default function PostCovers({ intendedFor, topics }: IPostCoversProps) {
	return (
		<S.PostCovers>
			<p>This post covers</p>
			<ul>
				{topics.map(topic => (
					<li key={topic}>{topic}</li>
				))}
			</ul>
			<S.Audience>{intendedFor}</S.Audience>
		</S.PostCovers>
	)
}
