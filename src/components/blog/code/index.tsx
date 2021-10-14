/* eslint-disable react/no-array-index-key */
import { useThemeContext } from 'context/theme'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import themeDark from 'prism-react-renderer/themes/dracula'
import themeLight from 'prism-react-renderer/themes/vsLight'
import React from 'react'
import * as S from './styles'

interface ICodeProps {
	codeString: string
	language: Language
	title?: string
}

export default function Code({ codeString, language, title }: ICodeProps) {
	const { colorMode } = useThemeContext()
	const theme = colorMode === 'dark' ? themeDark : themeLight

	return (
		<Highlight
			{...defaultProps}
			theme={theme}
			code={codeString}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<S.GatsbyHighlight title={title} language={language}>
					<S.Pre className={className} style={style}>
						{tokens.map((line, i) => (
							<S.Line key={i} {...getLineProps({ line, key: i })}>
								{/* <S.LineNo>{i + 1}</S.LineNo> */}
								<S.LineContent>
									{line.map((token, key) => (
										<span key={key} {...getTokenProps({ token, key })} />
									))}
								</S.LineContent>
							</S.Line>
						))}
					</S.Pre>
				</S.GatsbyHighlight>
			)}
		</Highlight>
	)
}
