import '@fontsource/libre-franklin'
import '@fontsource/mukta'
import 'prismjs/themes/prism-tomorrow.css'
import providerWrapper from './site/wrappers/provider-wrapper'
import rootWrapper from './site/wrappers/root-wrapper'

export const wrapPageElement = rootWrapper

export const wrapRootElement = providerWrapper
