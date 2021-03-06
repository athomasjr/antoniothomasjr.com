import { graphql, useStaticQuery } from 'gatsby'
import { ISiteMetaData } from 'types'

export const query = graphql`
	query SiteMetadataHook {
		site {
			siteMetadata {
				social {
					github {
						username
						url
					}
					linkedin {
						url
						username
					}
					twitter {
						handle
						url
					}
				}
				title
				author {
					name
					summary
				}
				description
				image
				siteUrl
				ogLanguage
				siteLanguage
				siteLocale
			}
		}
	}
`

export function useSiteMetadata(): ISiteMetaData {
	const data = useStaticQuery(query)

	return data.site?.siteMetadata
}
