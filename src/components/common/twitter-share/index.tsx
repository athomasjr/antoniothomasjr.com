import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import * as styles from './twitter-share.module.scss'

interface ITwitterShareProps {
	url: string
}

export default function TwitterShare({ url }: ITwitterShareProps) {
	return (
		<a
			className={styles.twitter_share}
			href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20post%20from%20@athomas_jr%20${url}`}
			rel='noopener noreferrer'
			target='_blank'>
			<p>Share it on Twitter</p>
			<FiTwitter className={styles.twitter} />
		</a>
	)
}
