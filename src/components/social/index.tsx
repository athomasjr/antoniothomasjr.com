import { useSiteMetadata } from 'hooks'
import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import * as S from './styles'

export default function Social() {
	const { social } = useSiteMetadata()

	return (
		<S.SocialContainer>
			{social?.twitter?.url && social?.twitter.handle && (
				<a href={social.twitter.url} target='_blank' rel='noopener noreferrer'>
					<FiTwitter />
				</a>
			)}
			{social?.linkedin?.url && social?.linkedin?.username && (
				<a href={social.linkedin.url} target='_blank' rel='noopener noreferrer'>
					<FiLinkedin />
				</a>
			)}
			{social?.github?.url && social?.github.username && (
				<a href={social.github.url} target='_blank' rel='noopener noreferrer'>
					<FiGithub />
				</a>
			)}
		</S.SocialContainer>
	)
}
