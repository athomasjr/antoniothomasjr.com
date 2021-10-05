import { Social } from 'components/common'
import { useSiteMetadata } from 'hooks'
import React from 'react'
import * as S from './styles'

export default function Footer() {
	const site = useSiteMetadata()
	return (
		<S.Footer>
			<div>
				<p>{`Designed and developed by ${site?.author?.name}.`} &copy;</p>
			</div>

			<Social />
		</S.Footer>
	)
}
