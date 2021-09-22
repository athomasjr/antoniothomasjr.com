import '@fontsource/libre-franklin'
import '@fontsource/mukta'
import 'normalize.css'
import providerWrapper from './site/wrappers/provider-wrapper'
import rootWrapper from './site/wrappers/root-wrapper'
import './src/styles/global.scss'

export const wrapPageElement = rootWrapper

export const wrapRootElement = providerWrapper
