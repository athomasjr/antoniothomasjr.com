/* eslint-disable no-undef */
describe('app', () => {
	it('works', () => {
		cy.visit('/')
			.get('header')
			.findByText(/about/i)
			.click()
			.get('h1')
			.findByDisplayValue('My Story')
	})
})

export {}
