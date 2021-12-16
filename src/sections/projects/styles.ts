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

export const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	${mediaQueries.tabletLand} {
		row-gap: 56px;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	${mediaQueries.laptopUp} {
		row-gap: 80px;
	}
`
