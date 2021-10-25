import { InfoStamp } from 'components/blog'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Maybe } from 'types'
import * as S from './styles'

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
		<S.InfoContainer>
			<S.Image>
				<StaticImage
					src='../../../images/hero7.png'
					alt='Antonio in a white collared shirt and blue tie with purple background'
				/>
			</S.Image>
			<InfoStamp
				author={author}
				published={published}
				timeToRead={timeToRead}
			/>
		</S.InfoContainer>
	)
}
