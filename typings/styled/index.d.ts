import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			dark: {
				bg_1: string
				highlight: string
				body: string
				headline: string
				tertiary: string
				bg_2: string
				header_bg: string
				tag_purple: string
				tag_black: string
				tag_green: string
				tag_white: string
				tag_red: string
				highlight_light: string
			}
		}
		fonts: {
			body: string
			headline: string
		}
		fontSize: {
			big_laptop_headline: string
			laptop_headline: string
			tablet_headline: string
		}

		padding: {
			page_phone: string
			page_tablet: string
			laptop: string
			big_laptop: string
		}

		boxShadow: {
			card: string
			hover: string
			project_img: string
		}
	}
}
