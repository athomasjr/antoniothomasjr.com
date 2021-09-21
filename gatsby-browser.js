import '@fontsource/libre-franklin'
import '@fontsource/mukta'
import 'normalize.css'
import './src/styles/global.scss'
import rootWrapper from './site/wrappers/root-wrapper'
import providerWrapper from './site/wrappers/provider-wrapper'

export const wrapPageElement = rootWrapper

export const wrapRootElement = providerWrapper
