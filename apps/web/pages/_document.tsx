import {
  createGetInitialProps,
  createStylesServer,
  ServerStyles,
} from '@mantine/next'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { emotionCache } from '../styles/emotion-caches'

const stylesServer = createStylesServer(emotionCache)
// const getInitialProps = createGetInitialProps()

export default class _Document extends Document {
  // static getInitialProps = getInitialProps
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key='styles'
        />,
      ],
    }
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <meta name='theme-color' content='#000000' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />

          <meta
            name='description'
            content='Our team comprises of talented individuals who have taken the initiative to offer innovative solutions to address significant digital challenges faced by critical sectors in Algeria.'
          />
          <link rel='manifest' href='/site.webmanifest' />
          {/* Fonts */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin={'true'}
          />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;700&family=Epilogue:wght@400;600;800&family=Work+Sans:wght@300;400;500;700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body lang='en'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
