import { graphql, useStaticQuery } from 'gatsby'
import { UseSiteMetaHookQuery } from 'types'

export const query = graphql`
	query UseSiteMetaHook {
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
			}
		}
	}
`

export function useSiteMetadata() {
	const data = useStaticQuery<UseSiteMetaHookQuery>(query)

	return data.site?.siteMetadata
}
