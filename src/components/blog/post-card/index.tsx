import { InfoStamp } from 'components/blog'
import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import { Maybe } from 'types'
import * as S from './styles'

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
		<S.PostCard>
			<article>
				<GatsbyLink to={`/blog/${slug}`}>
					<h2>{title}</h2>
					<div>
						<InfoStamp
							author={author}
							timeToRead={timeToRead}
							published={published}
						/>
					</div>
					<p>{description}</p>
				</GatsbyLink>
			</article>
		</S.PostCard>
	)
}
