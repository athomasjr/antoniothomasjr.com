import React, { createContext, useCallback, useContext, useState } from 'react'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from 'styles'

interface IThemeContext {
	setThemeString: React.Dispatch<React.SetStateAction<string>>
	themeString: string
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

const ThemeProvider = ({
	children,
}: React.PropsWithChildren<{ children: React.ReactNode }>) => {
	const [themeString, setThemeString] = useState('light')
	const themeObject = themeString === 'dark' ? darkTheme : lightTheme
	return (
		<ThemeContext.Provider value={{ themeString, setThemeString }}>
			<BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
		</ThemeContext.Provider>
	)
}

function useTheme() {
	const context = useContext(ThemeContext)
	if (!context) throw new Error('useTheme must be used within a ThemeProvider')
	const { themeString, setThemeString } = context
	const toggleTheme = useCallback(() => {
		if (themeString === 'light') setThemeString('dark')
		else if (themeString === 'dark') setThemeString('light')
	}, [themeString, setThemeString])
	return {
		theme: themeString,
		toggleTheme,
	}
}

export { ThemeProvider, useTheme }
