import { yupResolver } from '@hookform/resolvers/yup'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import * as styles from './subscribe.module.scss'

interface ISubscribeFormInputs {
	email: string
}

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Please provide a valid email address.')
		.trim()
		.required(),
})

export default function SubscribeForm() {
	const [successMsg, setSuccessMsg] = useState<string | null>(null)

	const {
		register,
		handleSubmit,
		reset,
		setError,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<ISubscribeFormInputs>({
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<ISubscribeFormInputs> = async (
		{ email },
		event,
	) => {
		event?.preventDefault()
		const result = await addToMailchimp(email)

		if (result.result === 'error') {
			const errorMessage = `Oops! ${
				result.msg.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('. ')[0]
			}.`
			setError('email', {
				type: 'server',
				message: errorMessage,
			})
		}

		if (result.result === 'success') {
			setSuccessMsg(result.msg)
			reset()
		}
	}

	return (
		<div className={styles.subscribe}>
			<p>Before You Go...</p>
			<p>
				Subscribe to get access to new posts and emails about web development.
			</p>
			<p>{successMsg}</p>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<input
					disabled={isSubmitSuccessful || isSubmitting}
					placeholder='you@example.com'
					{...register('email')}
				/>

				<button
					className={styles.cta}
					disabled={isSubmitSuccessful || isSubmitting}
					type='submit'>
					Subscribe
				</button>
			</form>
			<p>{errors.email && errors.email?.message}</p>
		</div>
	)
}
