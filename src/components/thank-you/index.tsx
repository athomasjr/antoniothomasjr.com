import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import { useSiteMetadata } from 'hooks'
import React from 'react'
import * as S from './styles'

export default function ThankYou() {
	const site = useSiteMetadata()
	const { img } = useStaticQuery(query)

	const bgImg = convertToBgImage(getImage(img))

	return (
		<S.Container alt='collage of thank you images' {...bgImg}>
			<div>
				<h1>Thank you!</h1>
				<p>I've received your message and will get back to you shortly.</p>
				{site?.social?.twitter?.url && site?.social?.twitter.handle && (
					<p>
						In the meantime, be sure to &nbsp;
						<a
							href={site.social.twitter.url}
							target='_blank'
							rel='noopener noreferrer'
						>
							follow me on Twitter <span>&rarr;</span>
						</a>
					</p>
				)}
			</div>
		</S.Container>
	)
}

export const query = graphql`
	query ThankYouImg {
		img: file(relativePath: { eq: "thank-you2-collage.jpeg" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED)
			}
		}
	}
`
