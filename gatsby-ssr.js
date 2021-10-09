/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-danger */
import React from 'react'
import providerWrapper from './site/wrappers/provider-wrapper'
import rootWrapper from './site/wrappers/root-wrapper'
import {
	COLORS,
	COLOR_MODE_KEY,
	INITIAL_COLOR_MODE_CSS_PROP,
} from './src/styles'

// eslint-disable-next-line @typescript-eslint/no-var-requires

function setColorsByTheme() {
	const colors = '🌈'
	const colorModeKey = '🔑'
	const colorModeCssProp = '⚡️'

	const mql = window.matchMedia('(prefers-color-scheme: dark)')
	const prefersDarkFromMQ = mql.matches
	const persistedPreference = localStorage.getItem(colorModeKey)

	let colorMode = 'light'

	const hasUsedToggle = typeof persistedPreference === 'string'

	if (hasUsedToggle) {
		colorMode = persistedPreference
	} else {
		colorMode = prefersDarkFromMQ ? 'dark' : 'light'
	}

	const root = document.documentElement

	root.style.setProperty(colorModeCssProp, colorMode)

	Object.entries(colors).forEach(([name, colorByTheme]) => {
		const cssVarName = `--color-${name}`
		root.style.setProperty(cssVarName, colorByTheme[colorMode])
	})
}

export const MagicScriptTag = () => {
	const boundFn = String(setColorsByTheme)
		.replace("'🌈'", JSON.stringify(COLORS))
		.replace('🔑', COLOR_MODE_KEY)
		.replace('⚡️', INITIAL_COLOR_MODE_CSS_PROP)

	const calledFunction = `(${boundFn})()`

	// eslint-disable-next-line react/no-danger
	return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

const FallbackStyles = () => {
	const cssVariableString = Object.entries(COLORS).reduce(
		(acc, [name, colorByTheme]) =>
			`${acc}\n--color-${name}: ${colorByTheme.light};`,
		'',
	)

	const wrappedInSelector = `html { ${cssVariableString} }`

	return <style>{wrappedInSelector}</style>
}

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
	// setHeadComponents([<FallbackStyles key='foo' />])
	// setPreBodyComponents([<MagicScriptTag key='bar' />])
}

export const wrapRootElement = providerWrapper

export const wrapPageElement = rootWrapper
