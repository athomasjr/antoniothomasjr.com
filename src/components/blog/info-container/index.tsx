import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Maybe } from 'types'
import * as styles from './info-container.module.scss'

interface IInfoWrapperProps {
	author: Maybe<string> | undefined
	published: Maybe<string> | undefined
	timeToRead: Maybe<number> | undefined
}

export default function InfoWrapper({
	author,
	published,
	timeToRead,
}: IInfoWrapperProps) {
	return (
		<div className={styles.info_container}>
			<div>
				<StaticImage
					src='../../../assets/images/hero7.png'
					alt='Antonio in a white collared shirt and blue tie with purple background'
					className={styles.img_container}
				/>
			</div>
			<div className={styles.info}>
				<p>{`${author} / ${published}`}</p>
				<p>{timeToRead} min read</p>
			</div>
		</div>
	)
}
