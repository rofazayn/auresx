import { Request, Response, Router } from 'express'
import { verify } from 'jsonwebtoken'
import prisma from '../configs/prisma-client'
import { ACCOUNTS_EMAIL_JWT_SECRET, NODE_ENV } from '../constants'

const authRoutes = Router()
authRoutes.get('/confirm-email/:token', async (req: Request, res: Response) => {
  try {
    let decodedConfirmationToken = verify(
      req.params.token,
      ACCOUNTS_EMAIL_JWT_SECRET
    ) as unknown as {
      userId: string
    }

    if (decodedConfirmationToken) {
      let targetUser = await prisma.user.findUnique({
        where: { id: decodedConfirmationToken.userId },
      })

      if (targetUser && !targetUser.emailConfirmed) {
        await prisma.user.update({
          data: { emailConfirmed: { set: true } },
          where: { id: decodedConfirmationToken.userId },
        })

        return res.redirect(
          NODE_ENV === 'production'
            ? 'https://auresx.com/dashboard'
            : 'http://localhost:3000/dashboard'
        )
      }
    }
    return res.redirect(
      NODE_ENV === 'production'
        ? 'https://auresx.com/dashboard'
        : 'http://localhost:3000/dashboard'
    )
  } catch {
    return res.redirect(
      NODE_ENV === 'production'
        ? 'https://auresx.com/login'
        : 'http://localhost:3000/login'
    )
  }
})

export default authRoutes
