export const COLORS = {
	text: {
		dark: '#94a1b2',
		light: '#2a2a2a',
	},
	header: {
		dark: '#fffffe',
		light: '#0d0d0d',
	},
	background: {
		light: '#eff0f3',
		medium: '#242629',
		dark: '#16161a',
	},
	input: {
		light: '#eff0f3',
		dark: '#242629',
	},
	primary: {
		dark: '#7f5af0',
		light: '#a88ff5',
	},
	cardBg: {
		light: '#F4F7F5',
		dark: '#242629',
	},
	subHeader: {
		dark: '#94a1b2',
		light: '#2a2a2a',
	},

	shadow: {
		light: '225deg 14% 50%',
		dark: '240deg 8% 0%',
	},

	codeBg: {
		dark: 'hsl(231,14%,18%)',
		light: 'hsl(0,0%,100%)',
	},
}

export const TAG_COLORS = {
	purple: '#7f5af088',
	black: '#16161a88',
	green: '#2cb67d88',
	white: '#fffffe30',
	red: '#ff000060',
}

export const FONTS = {
	body: 'Mukta',
	header: 'Libre Franklin',

	size: {
		big_laptop_header: `4rem;`,
		laptop_header: `3.5rem;`,
		tablet_header: `3rem;`,
		sub_sub_heading: 'font-size: 1.953rem;',
	},
}

export const PADDING = {
	page: {
		phone: `50px 20px;`,
		tablet: `80px 90px;`,
		laptop: `80px 150px;`,
		laptopXL: ` 120px 250px;`,
	},
}

export const ELEVATIONS = {
	small: `
    0.5px 1px 1px hsl(var(--color-shadow) / 0.7)
  `,
	medium: `
    1px 2px 2px hsl(var(--color-shadow) / 0.333),
    2px 4px 4px hsl(var(--color-shadow) / 0.333),
    3px 6px 6px hsl(var(--color-shadow) / 0.333)
  `,
	large: `
    1px 2px 2px hsl(var(--color-shadow) / 0.2),
    2px 4px 4px hsl(var(--color-shadow) / 0.2),
    4px 8px 8px hsl(var(--color-shadow) / 0.2),
    8px 16px 16px hsl(var(--color-shadow) / 0.2),
    16px 32px 32px hsl(var(--color-shadow) / 0.2)
  `,
}

export const COLOR_MODE_KEY = 'color-mode'
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode'
