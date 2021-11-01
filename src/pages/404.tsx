import loadable from '@loadable/component'
import React from 'react'

const NotFoundContent = loadable(() => import('sections/not-found-content'))

const NotFound = () => <NotFoundContent />

export default NotFound
