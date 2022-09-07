import {
  AspectRatio,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  NativeBaseProvider,
  ScrollView,
  Text,
} from 'native-base'
import React from 'react'

export default function App() {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Container py={20}>
            <AspectRatio ratio={1 / 1} width='100%' mb={4}>
              <Image
                source={{ uri: 'https://unsplash.it/500/500' }}
                alt='hello'
                maxWidth={'100%'}
                borderRadius={'lg'}
                size={'full'}
              />
            </AspectRatio>

            <Heading>
              A component Kermouda Tafes for the
              <Text color='indigo.500'> React Ecosystem</Text>
            </Heading>
            <Text my='3' fontWeight='medium'>
              NativeBase is a simple, modular and accessible component library
              that gives you building blocks to build you React applications.
            </Text>
            <Flex flex={1} direction={'row'}>
              <Button
                width={'100%'}
                colorScheme={'indigo'}
                onPress={() => alert('hello')}
                borderRadius={'lg'}
                _text={{
                  fontWeight: 'bold',
                }}
              >
                Login to your account
              </Button>
            </Flex>
            <Flex flex={1} direction={'row'}>
              <Button
                width={'100%'}
                onPress={() => alert('hello')}
                variant='link'
                borderRadius={'lg'}
                colorScheme='gray'
                _text={{
                  fontWeight: 'medium',
                }}
              >
                Don't have one? Register.
              </Button>
            </Flex>
          </Container>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  )
}
