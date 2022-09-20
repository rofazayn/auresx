import rtlPlugin from 'stylis-plugin-rtl'
import { createEmotionCache } from '@mantine/core'

export const emotionCache = createEmotionCache({ key: 'auresx' })

export const rtlCache = createEmotionCache({
  key: 'auresx-rtl',
  stylisPlugins: [rtlPlugin],
})
