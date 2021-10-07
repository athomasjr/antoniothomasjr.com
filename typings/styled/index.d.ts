import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		header: string
		subHead: string
		bg: string
		body: string
		heroCta: string
		cardBg: string
		imgBorder: string
		inputBg: string
		primary: {
			dark: string
			light: string
		}
	}
}
