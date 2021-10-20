import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { css, StyledProps } from 'styled-components'
import { ELEVATIONS } from 'styles'

interface IStyledImageProps {
	elevation?: 'md' | 'lg' | 'none'
}

export const setElevation = ({ elevation }: StyledProps<IStyledImageProps>) => {
	if (elevation === 'md') {
		return css`
			box-shadow: ${ELEVATIONS.medium};
		`
	}

	if (elevation === 'lg') {
		return css`
			box-shadow: ${ELEVATIONS.large};
		`
	}

	if (elevation === 'none') {
		return null
	}

	return css`
		box-shadow: ${ELEVATIONS.small};
	`
}

export const StyledImage = styled(GatsbyImage)`
	${setElevation}
	margin: 16px 0;
	border-radius: 4px;
`
