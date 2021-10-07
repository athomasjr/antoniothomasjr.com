import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Toggle from 'react-toggle'
import styled from 'styled-components'
import './toggle.css'

interface IThemeToggleProps {
	defaultChecked?: boolean
	onChange: () => void
}

const Moon = styled(FiMoon)`
	fill: #f4f6f0;
	color: #f4f6f0;
	font-size: 1.5rem;
	margin-right: 4px;
`
const Sun = styled(FiSun)`
	fill: #f28c38;
	color: #f28c38;
	font-size: 1.5rem;
	margin-left: 4px;
`

export default function ThemeToggle({
	defaultChecked,
	onChange,
}: IThemeToggleProps) {
	return (
		<Toggle
			defaultChecked={defaultChecked}
			onChange={onChange}
			icons={{
				checked: <Moon />,
				unchecked: <Sun />,
			}}
		/>
	)
}
