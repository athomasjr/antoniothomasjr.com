import React from 'react'
import * as S from './styles'

interface ITwitterShareProps {
	url: string
	className?: string
}

export default function TwitterShare({ url, className }: ITwitterShareProps) {
	return (
		<S.TwitterShare
			className={className}
			href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20post%20from%20@athomas_jr%20${url}`}
			rel='noopener noreferrer'
			target='_blank'
		>
			<p>Share it on Twitter</p>
			<S.Twitter />
		</S.TwitterShare>
	)
}
