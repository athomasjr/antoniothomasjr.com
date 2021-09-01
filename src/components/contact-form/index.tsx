import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import * as styles from './contact-form.module.scss'

interface ContactFormInputs {
	name: string
	email: string
	message: string
}

const schema = yup.object().shape({
	name: yup
		.string()
		.max(20, 'Must be 20 characters or less.')
		.trim()
		.required(),
	email: yup
		.string()
		.email('Please provide a valid email address.')
		.trim()
		.required(),
	message: yup
		.string()
		.trim()
		.max(180, 'Must be 180 characters or less.')
		.required(),
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const encode = (data: any) =>
	Object.keys(data)
		// eslint-disable-next-line prefer-template
		.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
		.join('&')

export default function ContactForm() {
	const [submitError, setSubmitError] = useState({
		error: false,
		message: '',
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
	} = useForm<ContactFormInputs>({
		resolver: yupResolver(schema),
	})

	const onSubmit = async (
		data: ContactFormInputs,
		e?: React.BaseSyntheticEvent,
	) => {
		e?.preventDefault()
		try {
			await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({ 'form-name': 'contact', ...data }),
			})
			if (isSubmitted || isSubmitSuccessful) {
				reset()
			}
		} catch (error) {
			setSubmitError({
				error: true,
				message: `Oops! ${error.message}. Please try again.`,
			})
		}
	}

	const showForm = (
		<form
			name='contact'
			method='POST'
			action='/thanks/'
			data-netlify='true'
			data-netlify-honeypot='bot-field'
			onSubmit={handleSubmit(onSubmit)}
			className={styles.contact_form}>
			<input type='hidden' name='form-name' value='contact' />
			<div>
				<label htmlFor='name'>
					First name
					<input
						id='name'
						disabled={isSubmitting}
						placeholder='Your name'
						{...register('name')}
					/>
				</label>
				<p className={errors.name?.message ? styles.error : ''}>
					{errors.name?.message}
				</p>
			</div>

			<div>
				<label htmlFor='email'>
					Email Address
					<input
						id='email'
						disabled={isSubmitting}
						placeholder='you@example.com'
						{...register('email')}
					/>
				</label>
				<p className={errors.email?.message ? styles.error : ''}>
					{errors.email?.message}
				</p>
			</div>

			<div className={styles.message_container}>
				<label htmlFor='message'>
					Message
					<textarea
						id='message'
						disabled={isSubmitting}
						placeholder='Your message'
						{...register('message')}
					/>
				</label>
				<p className={errors.message?.message ? styles.error : ''}>
					{errors.message?.message}
				</p>
			</div>

			<button
				className={styles.cta_button}
				disabled={isSubmitting}
				type='submit'>
				send message
			</button>
		</form>
	)

	if (submitError.error) {
		return (
			<div className={styles.message_error}>
				<p>{submitError.message}</p>
				<button
					onClick={() => setSubmitError({ error: false, message: '' })}
					className={styles.cta_button}
					type='button'>
					Try again
				</button>
			</div>
		)
	}

	return <>{showForm}</>
}
