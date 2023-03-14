import { AspectRatio, Box, useMantineColorScheme } from '@mantine/core'
import NextImage from 'next/image'
import logoImageLight from '../public/images/logo-light.png'
import logoImage from '../public/images/logo.png'

const Logo = () => {
  const { colorScheme } = useMantineColorScheme()
  return (
    <Box>
      <AspectRatio
        ratio={1 / 1}
        sx={{
          width: 42,
          cursor: 'pointer',
          '@media (max-width: 768px)': {
            width: 38,
          },
        }}
      >
        {colorScheme === 'dark' ? (
          <NextImage
            src={logoImage}
            alt='AuresX logo'
            aria-label='AuresX logo'
            layout='fill'
            placeholder='blur'
          />
        ) : (
          <NextImage
            src={logoImageLight}
            alt='AuresX logo'
            aria-label='AuresX logo'
            layout='fill'
            placeholder='blur'
          />
        )}
      </AspectRatio>
    </Box>
  )
}

export default Logo
