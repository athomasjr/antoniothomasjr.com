import Skill from 'components/skill'
import React from 'react'
import { DiJavascript } from 'react-icons/di'
import { FaCss3, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import {
	SiGatsby,
	SiMongodb,
	SiNextdotjs,
	SiStyledcomponents,
	SiSvelte,
	SiTypescript,
} from 'react-icons/si'
import { SectionTitle } from 'styles/typography'
import * as S from './styles'

export default function Skills() {
	const skills = [
		{ Icon: SiTypescript, text: 'TypeScript' },
		{ Icon: DiJavascript, text: 'JavaScript' },
		{ Icon: FaReact, text: 'React' },
		{ Icon: SiGatsby, text: 'Gatbsy' },
		{ Icon: SiNextdotjs, text: 'Next.js' },
		{ Icon: SiSvelte, text: 'Svelte' },
		{ Icon: FaNodeJs, text: 'Node' },
		{ Icon: SiMongodb, text: 'MongoDB' },
		{ Icon: FaCss3, text: 'CSS' },
		{ Icon: FaSass, text: 'Sass/Scss' },
		{ Icon: SiStyledcomponents, text: 'Styled' },
		{ Icon: FiGithub, text: 'Git' },
	]

	const renderSkills = () =>
		skills.map(skill => <Skill Icon={skill.Icon} text={skill.text} />)

	return (
		<S.Container id='skills'>
			<SectionTitle>
				My <span>Toolbox</span>
			</SectionTitle>
			<S.SkillsGrid>{renderSkills()}</S.SkillsGrid>
		</S.Container>
	)
}
