import { useSiteMetadata } from 'hooks'
import React from 'react'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import * as styles from './footer.module.scss'

export default function Footer() {
	const site = useSiteMetadata()
	return (
		<footer className={styles.footer}>
			<div>
				<p>{`Designed and developed by ${site?.author?.name}.`} &copy;</p>
			</div>

			{site?.social && (
				<div className={styles.social_container}>
					{site.social?.twitter?.url && site.social?.twitter.handle && (
						<a
							href={site.social.twitter.url}
							target='_blank'
							rel='noopener noreferrer'>
							<FiTwitter />
						</a>
					)}
					{site.social?.linkedin?.url && site.social?.linkedin?.username && (
						<a
							href={site.social.linkedin.url}
							target='_blank'
							rel='noopener noreferrer'>
							<FiLinkedin />
						</a>
					)}
					{site.social?.github?.url && site.social?.github.username && (
						<a
							href={site.social.github.url}
							target='_blank'
							rel='noopener noreferrer'>
							<FiGithub />
						</a>
					)}
				</div>
			)}
		</footer>
	)
}
