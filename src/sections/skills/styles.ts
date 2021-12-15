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

export const SkillsGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	/* justify-content: space-between; */
	gap: 16px;

	${mediaQueries.tabletUp} {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 16px;
	}
`
