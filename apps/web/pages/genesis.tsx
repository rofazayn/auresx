import { Container } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import GenesisPreviewCard from '../components/genesis-preview-card'
import PageLayout from '../components/_layouts/page-layout'

const GenesisPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>AuresX - Genesis POS</title>
        <meta
          name='description'
          content="Genesis POS - the revolutionary point-of-sale software for modern businesses. With offline mode, advanced features, and data synchronization, you can streamline your operations and maximize profits. Say goodbye to outdated systems and hello to Genesis POS - the modern, innovative, and powerful solution that's changing the game for businesses everywhere!"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageLayout>
        <Container
          size='xl'
          sx={{
            paddingTop: 104,
          }}
        >
          <GenesisPreviewCard />
        </Container>
      </PageLayout>
    </>
  )
}

export default GenesisPage
