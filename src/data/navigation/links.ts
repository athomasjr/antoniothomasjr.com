import { MyNavLinkData } from 'types'

export const myLinkData: MyNavLinkData[] = [
	{
		id: 343424342,
		text: 'Home',
		to: '/',
		isAnchor: false,
		isMobile: true,
	},
	{
		id: 90980,
		text: 'Blog',
		to: '/blog',
		isAnchor: false,
		isMobile: false,
	},
	{
		id: 96392,
		text: 'Recent Work',
		to: '/#recent-work',
		isAnchor: true,
		isMobile: false,
	},
	{
		id: 51266,
		text: 'My Story',
		to: '/#about',
		isAnchor: true,
		isMobile: false,
	},
	{
		id: 90444,
		text: 'Contact Me',
		to: '/#contact',
		isAnchor: true,
		isMobile: false,
	},
]
