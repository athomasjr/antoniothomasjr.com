import { InfoStamp } from 'components'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Maybe } from 'types'
import * as styles from './info-container.module.scss'

interface IInfoContainerProps {
	author: Maybe<string> | undefined
	published: Maybe<string> | undefined
	timeToRead: Maybe<number> | undefined
}

export default function InfoContainer({
	author,
	published,
	timeToRead,
}: IInfoContainerProps) {
	return (
		<div className={styles.info_container}>
			<div>
				<StaticImage
					src='../../../assets/images/hero7.png'
					alt='Antonio in a white collared shirt and blue tie with purple background'
					className={styles.img_container}
				/>
			</div>
			<InfoStamp
				className={styles.info_stamp}
				author={author}
				published={published}
				timeToRead={timeToRead}
			/>
		</div>
	)
}
