import React from 'react'
import * as S from './styles'

interface SkillProps {
	Icon: React.ComponentType<any>
	text: string
}

export default function Skill({ Icon, text }: SkillProps) {
	return (
		<S.Skill>
			<Icon />
			<p>{text}</p>
		</S.Skill>
	)
}
