import styled from 'styled-components'
import { mediaQueries } from 'styles'

export const Container = styled.div`
	/* overflow-x: hidden; */
	display: flex;
	flex-direction: column;

	main {
		/* min-height: calc(100vh - 180px); */

		${mediaQueries.laptopUp} {
			flex: 1 0 auto;
			min-height: calc(100vh - 200px);
		}
	}
`
