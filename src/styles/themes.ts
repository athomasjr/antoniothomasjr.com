import { DefaultTheme } from 'styled-components'
import { COLORS } from './constants'

const lightTheme: DefaultTheme = {
	header: COLORS.text.header.light,
	subHead: COLORS.text.light,
	bg: COLORS.background.light,
	body: COLORS.text.light,
	primary: COLORS.primary,
	heroCta: COLORS.text.header.light,
	cardBg: COLORS.background.light,
	imgBorder: COLORS.background.light,
	inputBg: COLORS.input,
}

const darkTheme: DefaultTheme = {
	header: COLORS.text.header.dark,
	subHead: COLORS.text.dark,
	bg: COLORS.background.dark,
	body: COLORS.text.dark,
	primary: COLORS.primary,
	heroCta: COLORS.text.header.dark,
	cardBg: COLORS.background.medium,
	imgBorder: COLORS.background.medium,
	inputBg: COLORS.background.medium,
}

export { lightTheme, darkTheme }
