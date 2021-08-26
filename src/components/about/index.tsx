import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { HiCode } from 'react-icons/hi'
import { aboutContent } from './about-content'
import * as styles from './about.module.scss'

export default function About() {
	return (
		<div className={styles.about}>
			<div>
				<h1>{aboutContent.heading}</h1>
				<p>{aboutContent.content1}</p>
				<p>{aboutContent.content2}</p>
			</div>
			<div>
				<StaticImage
					className={styles.img}
					src='../../images/about-pic-3.png'
					alt='Antonio holding infant son'
				/>
				<div>
					<ul>
						{aboutContent.skills.map(skill => (
							<li key={skill}>
								<HiCode />
								{skill}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}
