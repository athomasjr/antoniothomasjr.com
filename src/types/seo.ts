export interface ISiteMetaData {
	title: string
	description: string
	image: string
	siteUrl: string
	ogLanguage: string
	siteLanguage: string
	siteLocale: string
	social: {
		github: {
			username: string
			url: string
		}
		linkedin: {
			url: string
			username: string
		}
		twitter: {
			handle: string
			url: string
		}
	}
	author: {
		name: string
		summary: string
	}
}
