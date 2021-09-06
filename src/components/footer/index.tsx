import Social from 'components/common/social'
import { useSiteMetadata } from 'hooks'
import React from 'react'
import * as styles from './footer.module.scss'

export default function Footer() {
	const site = useSiteMetadata()
	return (
		<footer className={styles.footer}>
			<div>
				<p>{`Designed and developed by ${site?.author?.name}.`} &copy;</p>
			</div>

			<Social />
		</footer>
	)
}
