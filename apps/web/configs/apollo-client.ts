import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  Observable,
} from '@apollo/client'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import jwtDecode from 'jwt-decode'
import { getAccessToken, setAccessToken } from '../utils/access-token'

const NODE_ENV = process.env.NODE_ENV! || 'development'
const serverEndpoint: string = `${
  NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://auresx.com'
}`

const httpLink = createHttpLink({
  uri: serverEndpoint + '/graphql',
  credentials: 'include',
})

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      let handle: any
      Promise.resolve(operation)
        .then((operation) => {
          const accessToken = getAccessToken()
          if (accessToken) {
            operation.setContext({
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
          }
        })
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          })
        })
        .catch(observer.error.bind(observer))

      return () => {
        if (handle) handle.unsubscribe()
      }
    })
)

const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: 'accessToken',
  isTokenValidOrUndefined: () => {
    const token = getAccessToken()

    if (!token) {
      setAccessToken(null)
      return false
    }

    try {
      const { exp }: any = jwtDecode(token)
      if (Date.now() >= exp * 1000) {
        return false
      } else {
        return true
      }
    } catch {
      return false
    }
  },
  fetchAccessToken: async () => {
    const refreshMutation = `
      mutation {
        refresh {
          accessToken
          refreshToken
        }
      }
    `
    const response = await fetch(serverEndpoint + '/graphql', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: refreshMutation,
      }),
    })

    return response.json()
  },
  handleFetch: (accessToken) => {
    if (accessToken) {
      setAccessToken(accessToken)
    } else {
      setAccessToken(null)
    }
  },
  handleResponse: (_operation, _accessTokenField) => (response: any) => {
    if (!response) return { accessToken: null }
    return { accessToken: response.data?.refresh?.accessToken }
  },
  handleError: () => {
    setAccessToken(null)
  },
})

const apolloClient = new ApolloClient({
  uri: serverEndpoint,
  cache: new InMemoryCache(),
  link: ApolloLink.from([tokenRefreshLink, requestLink, httpLink]),
})

export default apolloClient
