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

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
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
        }
      }
    `
    const response = await fetch(`http://localhost:4000/graphql`, {
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
    console.warn('your refresh token is invalid, please relogin')
  },
})

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  link: ApolloLink.from([tokenRefreshLink, requestLink, httpLink]),
})

export default apolloClient
