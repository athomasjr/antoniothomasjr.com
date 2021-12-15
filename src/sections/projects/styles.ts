import { BaseContainer } from 'layouts/utils/base-container'
import styled from 'styled-components'
import { mediaQueries } from 'styles'

export const Container = styled(BaseContainer)`
	display: flex;
	flex-direction: column;
	gap: 40px;

	${mediaQueries.tabletUp} {
		gap: 70px;
	}
`
