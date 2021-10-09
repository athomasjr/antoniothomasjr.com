import { ThemeContext } from 'context/theme'
import React, { useContext } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import Toggle from 'react-toggle'
import styled from 'styled-components'
import './toggle.css'

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

export default function ThemeToggle() {
	const { colorMode, setColorMode } = useContext(ThemeContext)!

	// if (!colorMode) {
	// 	return null
	// }

	return (
		<Toggle
			defaultChecked={colorMode === 'dark'}
			onChange={ev => {
				setColorMode(ev.target.checked ? 'dark' : 'light')
			}}
			icons={{
				checked: <Moon />,
				unchecked: <Sun />,
			}}
		/>
	)
}
