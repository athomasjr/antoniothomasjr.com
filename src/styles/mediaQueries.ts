const breakpoints = {
	xlDesktop: 112.5,
	xxl: 92.5, // 1480px
	xl: 75, // 1200px
	lg: 62, // 992px
	md: 48, // 768px
	mobileXL: 36, // 576px
	sm: 26.75, // 428px
	mdMobile: 26.6875, // 427px
	xsMax: 20.4375, // max 327px
}

const customMinMediaQuery = (minWidth: number) =>
	`@media only screen and (min-width: ${minWidth}em)`

const customMaxMediaQuery = (maxWidth: number) =>
	`@media only screen and (max-width: ${maxWidth}em)`

export const mediaQueries = {
	smallOnly: customMaxMediaQuery(breakpoints.xsMax),
	phoneOnly: customMaxMediaQuery(breakpoints.mdMobile),
	mdPhoneDown: customMaxMediaQuery(breakpoints.mobileXL),
	mdPhoneUp: customMinMediaQuery(breakpoints.sm),
	tabletUp: customMinMediaQuery(breakpoints.md),
	tabletLand: customMinMediaQuery(breakpoints.lg),
	laptopUp: customMinMediaQuery(breakpoints.xl),
	laptopXlUp: customMinMediaQuery(breakpoints.xxl),
	bigDesktopUp: customMinMediaQuery(breakpoints.xlDesktop),
}
