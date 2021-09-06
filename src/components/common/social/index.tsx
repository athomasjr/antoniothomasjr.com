import { useSiteMetadata } from 'hooks'
import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import * as styles from './social.module.scss'

export default function Social() {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const { social } = useSiteMetadata()!

	return (
		<div className={styles.social_container}>
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
		</div>
	)
}