import React, {
	createContext,
	PropsWithChildren,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'
import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from 'styles'

interface IThemeContext {
	colorMode: string | undefined
	// eslint-disable-next-line no-unused-vars
	setColorMode: (value: string) => void
}

export const ThemeContext = createContext<IThemeContext | null>(null)

export const ThemeProvider = ({
	children,
}: PropsWithChildren<{ children: React.ReactNode }>) => {
	const [colorMode, rawSetColorMode] = useState<string | undefined>(undefined)

	useEffect(() => {
		const root = window.document.documentElement

		// Because colors matter so much for the initial page view, we're
		// doing a lot of the work in gatsby-ssr. That way it can happen before
		// the React component tree mounts.
		const initialColorValue = root.style.getPropertyValue(
			INITIAL_COLOR_MODE_CSS_PROP,
		)

		rawSetColorMode(initialColorValue)
	}, [])

	const contextValue = useMemo(() => {
		function setColorMode(newValue: string) {
			const root = window.document.documentElement

			localStorage.setItem(COLOR_MODE_KEY, newValue)

			Object.entries(COLORS).forEach(([name, colorByTheme]) => {
				const cssVarName = `--color-${name}`
				// @ts-expect-error not sure why yet
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

export const useThemeContext = (): IThemeContext => useContext(ThemeContext)!
