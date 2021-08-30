import ContactForm from 'components/contact-form'
import React from 'react'
import * as styles from './contact.module.scss'

export default function Contact() {
	return (
		<section id='contact' className={styles.contact}>
			<div className={styles.content_container}>
				<h2>Reach me</h2>
				<h3>
					In need of a developer or want to say hi? Please send me a message
					below.
				</h3>
				<h4>Currently available for freelance work.</h4>
			</div>
			<div className={styles.form_container}>
				<ContactForm />
			</div>
		</section>
	)
}
