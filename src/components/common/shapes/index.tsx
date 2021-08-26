import React from 'react'
import * as styles from './shapes.module.scss'

export default function Shapes() {
	return (
		<>
			<div className={styles.animation_area}>
				<ul className={styles.box_area}>
					<figure />
					<figure />
					<figure />
					<figure />
					<figure />
					<figure />
				</ul>
			</div>
		</>
	)
}
