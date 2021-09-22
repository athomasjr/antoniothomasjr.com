import React from 'react'
import { Maybe } from 'types'

interface IInfoStampProps {
	author?: Maybe<string>
	className?: string
	published?: Maybe<any>
	timeToRead?: Maybe<number>
}

export default function InfoStamp({
	author,
	published,
	timeToRead,
	className,
}: IInfoStampProps) {
	return (
		<div className={className}>
			<p>
				{author} /&nbsp;<time>{published}</time>
			</p>

			<p>{timeToRead} min read</p>
		</div>
	)
}
