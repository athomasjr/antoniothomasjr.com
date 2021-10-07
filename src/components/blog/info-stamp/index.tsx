import { useTheme } from 'context/theme'
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
	const { theme } = useTheme()

	return (
		<S.Container isLight={theme === 'light'}>
			<p>
				{author} /&nbsp;<time>{published}</time>
			</p>

			<p>{timeToRead} min read</p>
		</S.Container>
	)
}
