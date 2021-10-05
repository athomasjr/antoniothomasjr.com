import { yupResolver } from '@hookform/resolvers/yup'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import * as S from './styles'

interface ISubscribeFormInputs {
	email: string
}

const schema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email('Please provide a valid email address.')
			.trim()
			.required(`Oops! A valid email is required.`),
	})
	.required()

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
		<S.Container>
			<p>Before You Go...</p>
			<p>
				Subscribe to get access to new posts and emails about web development.
			</p>
			<S.Message success>{successMsg}</S.Message>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<input
					disabled={isSubmitSuccessful || isSubmitting}
					placeholder='you@example.com'
					{...register('email')}
				/>

				<S.Button disabled={isSubmitSuccessful || isSubmitting} type='submit'>
					Subscribe
				</S.Button>
			</S.Form>
			<S.Message error>{errors.email && errors.email?.message}</S.Message>
		</S.Container>
	)
}
