const breakpoints = {
	xlDesktop: 112.5,
	xxl: 92.5, // 1480px
	xl: 75, // 1200px
	lg: 62, // 992px
	md: 48, // 768px
	mdPhone: 26.6875, // 427px
	sm: 36, // 576px
	xsMax: 20.4375, // max 327px
}

const customMinMediaQuery = (minWidth: number) =>
	`@media only screen and (min-width: ${minWidth}em)`

const customMaxMediaQuery = (maxWidth: number) =>
	`@media only screen and (max-width: ${maxWidth}em)`

export const mediaQueries = {
	smallOnly: customMaxMediaQuery(breakpoints.xsMax),
	phoneOnly: customMaxMediaQuery(breakpoints.sm),
	mdPhoneUp: customMinMediaQuery(breakpoints.mdPhone),
	tabletUp: customMinMediaQuery(breakpoints.md),
	tabletLand: customMinMediaQuery(breakpoints.lg),
	laptopUp: customMinMediaQuery(breakpoints.xl),
	laptopXlUp: customMinMediaQuery(breakpoints.xxl),
	bigDesktopUp: customMinMediaQuery(breakpoints.xlDesktop),
}
