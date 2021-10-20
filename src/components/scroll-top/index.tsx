import React, { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import * as S from './styles'

export default function ScrollTop() {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<S.Container isVisible={isVisible}>
			<button type='button' onClick={scrollToTop}>
				<FiChevronUp aria-hidden='true' />
			</button>
		</S.Container>
	)
}