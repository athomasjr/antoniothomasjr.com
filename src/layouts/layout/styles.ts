import styled from 'styled-components'
import { mediaQueries } from 'styles'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	/* added to update mobile scroll */
	overflow: scroll;
	-webkit-overflow-scrolling: touch;

	/* added to update mobile scroll */

	${mediaQueries.laptopUp} {
		overflow-x: hidden;
		/* overflow: hidden !important; */
		overflow-y: auto !important;
	}

	main {
		flex: 1 0 auto;
		min-height: calc(100vh - 200px);
	}
`
