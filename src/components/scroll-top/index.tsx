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

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<S.Button stripHash isVisible={isVisible} to='/#top'>
			<FiChevronUp aria-hidden='true' />
		</S.Button>
	)
}
