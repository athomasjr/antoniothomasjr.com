import React from 'react'
import * as S from './styles'

interface SkillProps {
	Icon: React.ComponentType<any>
	text: string
	idx: number
	inView: boolean
}

export default function Skill({ Icon, text, idx, inView }: SkillProps) {
	return (
		<S.Skill
			initial={{ opacity: 0, translateY: 50, translateX: 50 }}
			animate={
				inView ? { opacity: 1, translateY: 0, translateX: 0 } : { opacity: 0 }
			}
			transition={
				inView ? { duration: 0.3, delay: idx * 0.3 } : { duration: 0, delay: 0 }
			}
		>
			<Icon />
			<p>{text}</p>
		</S.Skill>
	)
}
