import { ApolloError } from 'apollo-server-core'
import { allow, rule, shield } from 'graphql-shield'

const isAuthenticated = rule()((parent, args, ctx, info) => {
  return !!ctx.user || new Error('you are not authenticated')
})

export default shield(
  {
    Query: {
      '*': isAuthenticated,
    },
    Mutation: {
      '*': isAuthenticated,
      login: allow,
      register: allow,
      refresh: allow,
    },
  },
  {
    fallbackError: async (thrownThing, _parent, _args, _context, _info) => {
      if (thrownThing instanceof ApolloError) {
        // expected errors
        return thrownThing
      } else if (thrownThing instanceof Error) {
        // unexpected errors
        console.error(thrownThing)
        // await Sentry.report(thrownThing)
        return new ApolloError(
          'Internal server error: unknown error occured!',
          'ERR_INTERNAL_SERVER'
        )
      } else {
        // what the hell got thrown
        console.error('The resolver threw something that is not an error.')
        console.error(thrownThing)
        return new ApolloError(
          'Internal server error: unauthorized!',
          'ERR_INTERNAL_SERVER'
        )
      }
    },
  }
)
