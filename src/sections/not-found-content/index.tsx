import { Link as GatsbyLink } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as styles from './404.module.scss'

export default function NotFoundContent() {
	return (
		<div className={styles.not_found_content}>
			<h1>Oops! Looks like that page doesn't exist...</h1>
			<p>
				You were probably looking for
				<GatsbyLink to='/#work'> my work.</GatsbyLink>
			</p>

			<StaticImage
				className={styles.img_container}
				src='../../assets/images/404-img.jpeg'
				alt='Small dog with glasses looking at laptop'
			/>
		</div>
	)
}
