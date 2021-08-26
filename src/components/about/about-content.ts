export interface AboutContent {
	heading: string
	content1: string
	content2: string
	skills: string[]
}

export const aboutContent: AboutContent = {
	heading: 'My Story',
	content1: `My name is Antonio, and  I enjoy creating front-end applications/websites for the internet to enjoy. I'm a father, husband, writer, fitness competitor, and "amateur" amateur bass fisherman.

`,
	content2: `My journey into web development is fascinating and by no means linear. The joy of giving life to creativity has always been there (I studied creative writing in college), and it has undoubtedly transferred over. My first experience in web development started with researching the process of changing a WordPress site's background color, which later transitioned to HTML and CSS.`,

	skills: ['React', 'JavaScript', 'Typescript', 'HTML', 'CSS', 'Sass'],
}
