import React from 'react'
import * as styles from './blog-wrapper.module.scss'

interface IBlogWrapperProps {
	children: React.ReactNode
}

export default function BlogWrapper({ children }: IBlogWrapperProps) {
	return <div className={styles.blog_wrapper}>{children}</div>
}
