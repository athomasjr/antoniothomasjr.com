import React from 'react'
import { Maybe } from 'types'
import * as S from './styles'

interface IInfoStampProps {
	author?: Maybe<string>
	published?: Maybe<any>
	timeToRead?: Maybe<number>
}

export default function InfoStamp({
	author,
	published,
	timeToRead,
}: IInfoStampProps) {
	return (
		<S.Container>
			<p>
				{author} /&nbsp;<time>{published}</time>
			</p>

			<p>{timeToRead} min read</p>
		</S.Container>
	)
}
