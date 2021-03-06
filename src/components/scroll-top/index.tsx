import React, { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import * as S from './styles'

export default function ScrollTop() {
	const [isVisible, setIsVisible] = useState(false)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<S.Button aria-hidden='true' isVisible={isVisible} onClick={scrollToTop}>
			<FiChevronUp />
		</S.Button>
	)
}
