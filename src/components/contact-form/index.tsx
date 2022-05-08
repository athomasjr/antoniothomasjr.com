import { yupResolver } from '@hookform/resolvers/yup'
import { useThemeContext } from 'context/theme'
import { navigate } from 'gatsby'
import encode from 'helpers/encode'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import * as S from './styles'

interface IContactFormInputs {
	name: string
	email: string
	message: string
}

const schema = yup
	.object()
	.shape({
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
	.required()

export default function ContactForm() {
	const { colorMode } = useThemeContext()

	const [submitError, setSubmitError] = useState({
		error: false,
		message: '',
	})

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<IContactFormInputs>({
		resolver: yupResolver(schema),
	})

	const onSubmit = async (
		data: IContactFormInputs,
		e?: React.BaseSyntheticEvent,
	) => {
		e?.preventDefault()
		try {
			await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({ 'form-name': 'contact', ...data }),
			})
			navigate('/thanks')
			reset()
		} catch (error) {
			setSubmitError({
				error: true,
				// @ts-expect-error error in catch should be unknown
				message: error.message
					? // @ts-expect-error error in catch should be unknown
					  `Oops! ${error.message}. Please try again.`
					: `Oops! something went wrong, please try again.`,
			})
		}
	}

	const showForm = (
		<S.Form
			isLight={colorMode !== 'dark'}
			name='contact'
			method='POST'
			action='#'
			data-netlify='true'
			data-netlify-honeypot='bot-field'
			onSubmit={handleSubmit(onSubmit)}
		>
			<input type='hidden' name='form-name' value='contact' />
			<div>
				<input
					id='name'
					disabled={isSubmitting}
					placeholder='Your name'
					{...register('name')}
				/>
				{errors.name?.message && <S.Error>{errors.name?.message}</S.Error>}
			</div>

			<div>
				<input
					id='email'
					disabled={isSubmitting}
					placeholder='you@example.com'
					{...register('email')}
				/>
				{errors.email?.message && <S.Error>{errors.email?.message}</S.Error>}
			</div>

			<S.MessageContainer>
				<S.Textarea
					id='message'
					disabled={isSubmitting}
					placeholder='Your message'
					{...register('message')}
				/>
				{errors.message?.message && (
					<S.Error>{errors.message?.message}</S.Error>
				)}
			</S.MessageContainer>

			<S.CTA disabled={isSubmitting} type='submit'>
				send message
			</S.CTA>
		</S.Form>
	)

	if (submitError.error) {
		return (
			<S.FormErrorMsg>
				<p>{submitError.message}</p>
				<S.CTA
					onClick={() => setSubmitError({ error: false, message: '' })}
					type='button'
				>
					Try again
				</S.CTA>
			</S.FormErrorMsg>
		)
	}

	return <>{showForm}</>
}
