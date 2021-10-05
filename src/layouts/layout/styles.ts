import styled from 'styled-components'

export const Container = styled.div`
	overflow-x: hidden;
	display: flex;
	flex-direction: column;

	main {
		flex: 1 0 auto;
		min-height: calc(100vh - 200px);
	}
`
