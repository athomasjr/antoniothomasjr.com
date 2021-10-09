import React, {
	createContext,
	PropsWithChildren,
	ReactNode,
	useContext,
	useState,
} from 'react'
import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from 'styles'

interface IThemeContext {
	colorMode: string | undefined
	// eslint-disable-next-line no-unused-vars
	setColorMode: (newValue: string) => void
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const ThemeProvider = ({
	children,
}: PropsWithChildren<{ children: ReactNode }>) => {
	const [colorMode, rawSetColorMode] = useState<string | undefined>(undefined)

	React.useEffect(() => {
		const root = window.document.documentElement

		const initialColorValue = root.style.getPropertyValue(
			INITIAL_COLOR_MODE_CSS_PROP,
		)

		rawSetColorMode(initialColorValue)
	}, [])

	const contextValue = React.useMemo(() => {
		function setColorMode(newValue: string) {
			const root = window.document.documentElement

			localStorage.setItem(COLOR_MODE_KEY, newValue)

			Object.entries(COLORS).forEach(([name, colorByTheme]) => {
				const cssVarName = `--color-${name}`
				// @ts-expect-error not sure why
				root.style.setProperty(cssVarName, colorByTheme[newValue])
			})

			rawSetColorMode(newValue)
		}

		return {
			colorMode,
			setColorMode,
		}
	}, [colorMode, rawSetColorMode])

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useThemeContext = () => useContext(ThemeContext)!
