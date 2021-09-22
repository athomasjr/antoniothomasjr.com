import { InfoStamp } from 'components'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { Maybe } from 'types'
import * as styles from './post-card.module.scss'

interface IPostCardProps {
	author?: Maybe<string>
	title?: Maybe<string>
	description?: Maybe<string>
	published?: Maybe<any>
	timeToRead?: Maybe<number>
	slug?: Maybe<string>
}

export default function PostCard({
	author,
	title,
	description,
	published,
	timeToRead,
	slug,
}: IPostCardProps) {
	return (
		<div className={styles.post_card}>
			<article>
				<GatsbyLink to={`/blog/${slug}`}>
					<h2>{title}</h2>
					<InfoStamp
						className={styles.info_stamp}
						author={author}
						timeToRead={timeToRead}
						published={published}
					/>
					<p>{description}</p>
				</GatsbyLink>
			</article>
		</div>
	)
}
