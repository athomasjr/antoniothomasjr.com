export default function encode(data: any) {
	return (
		Object.keys(data)
			// eslint-disable-next-line prefer-template
			.map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			.join('&')
	)
}
