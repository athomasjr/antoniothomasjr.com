import { ContactForm } from 'components'
import React from 'react'
import * as S from './styles'

export default function Contact() {
	return (
		<S.Container id='contact'>
			<div>
				<h2>Get in Touch</h2>
				<p>
					If you need a developer or want to say hi, send me a message below.
				</p>
			</div>
			<div>
				<ContactForm />
			</div>
		</S.Container>
	)
}
