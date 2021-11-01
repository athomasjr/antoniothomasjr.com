import loadable from '@loadable/component'
import React from 'react'

const ThankYou = loadable(() => import('components/thank-you'))

const Thanks = () => <ThankYou />

export default Thanks
