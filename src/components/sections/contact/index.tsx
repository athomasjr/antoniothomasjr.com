import { ContactForm } from 'components'
import React from 'react'
import * as styles from './contact.module.scss'

export default function Contact() {
	return (
		<section id='contact' className={styles.contact}>
			<div>
				<h2>Get in touch</h2>
				<p>
					If you need a developer or want to say hi, send me a message below.
				</p>
				{/* <h4>Currently available for freelance work.</h4> */}
			</div>
			<div>
				<ContactForm />
			</div>
		</section>
	)
}
