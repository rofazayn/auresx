import { MantineThemeOverride } from '@mantine/core'

const mantineTheme: MantineThemeOverride = {
  fontFamily: 'Work Sans, IBM Plex Sans Arabic, sans-serif',
  // focusRing: 'always',
  colorScheme: 'light',
  defaultRadius: 8,
  headings: {
    fontFamily: 'Epilogue, Merriweather Sans, IBM Plex Sans Arabic, serif',
  },
  colors: {
    fluor: [
      '#d2f9f0',
      '#a6f4e0',
      '#79eed1',
      '#54ffd1',
      '#4de9c1',
      '#20e3b2',
      '#25e6b2',
      '#1ab68e',
      '#13886b',
      '#0d5b47',
    ],
  },
  primaryColor: 'indigo',
  // primaryShade: 7,
  lineHeight: 1.6,
  components: {
    InputWrapper: {
      defaultProps: {
        inputWrapperOrder: ['label', 'error', 'input', 'description'],
      },
    },
    Input: {
      styles: (_theme: any) => ({
        input: { borderWidth: 2 },
      }),
    },
  },
}

export default mantineTheme
