import { getInitialColorMode } from 'lib'
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext<any>(undefined)

export const ThemeProvider = ({
	children,
}: React.PropsWithChildren<{ children: React.ReactNode }>) => {
	const [colorMode, rawSetColorMode] = useState(getInitialColorMode)

	const setColorMode = (value: any) => {
		rawSetColorMode(value)

		// Persist it on update
		window.localStorage.setItem('color-mode', value)
	}

	return (
		<ThemeContext.Provider value={{ colorMode, setColorMode }}>
			{children}
		</ThemeContext.Provider>
	)
}
