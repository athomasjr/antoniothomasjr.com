import React from 'react'

const MagicScriptTag = () => {
	const codeToRunOnClient = `
(function() {
  alert("Hi!");
})()
  `
	// eslint-disable-next-line react/no-danger
	return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }: any) => {
	setPreBodyComponents(<MagicScriptTag />)
}
