import passport from 'passport'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import prisma from './prisma-client'

const opts: any = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'mysupersecretprivatekey',
  // issuer: 'accounts.auresx.com',
  // audience: 'auresx.com',
}

passport.use(
  new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log(jwt_payload)
    try {
      const user = await prisma.user.findFirst({
        where: { email: jwt_payload.email },
      })

      console.log(user)

      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    } catch (error) {
      console.log('first')
      return done(error, false)
    }
  })
)
