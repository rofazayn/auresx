// components/RouterTransition.tsx
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  startNavigationProgress,
  resetNavigationProgress,
  NavigationProgress,
} from '@mantine/nprogress'

export function RouterTransition() {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log('triggered')
      return url !== router.asPath && startNavigationProgress()
    }

    const handleComplete = () => {
      resetNavigationProgress()
      console.log('complete')
    }

    if (typeof window !== 'undefined') {
      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)
    }

    return () => {
      if (typeof window !== 'undefined') {
        router.events.off('routeChangeStart', handleStart)
        router.events.off('routeChangeComplete', handleComplete)
        router.events.off('routeChangeError', handleComplete)
      }
    }
  }, [router.asPath, router.events])

  return <NavigationProgress size={2} />
}
