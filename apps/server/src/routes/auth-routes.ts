import { Request, Response, Router } from 'express'
import { verify } from 'jsonwebtoken'
import prisma from '../configs/prisma-client'

const authRoutes = Router()
authRoutes.get('/confirm-email/:token', async (req: Request, res: Response) => {
  try {
    let decodedConfirmationToken = verify(
      req.params.token,
      process.env.EMAIL_JWT_SECRET!
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
          !process.env.PROD
            ? 'http://localhost:3000/dashboard'
            : 'https://www.auresx.com/dashboard'
        )
      }
    }
    return res.redirect(
      !process.env.PROD ? 'http://localhost:3000/' : 'https://www.auresx.com/'
    )
  } catch {
    return res.redirect(
      !process.env.PROD ? 'http://localhost:3000/' : 'https://www.auresx.com/'
    )
  }
})

export default authRoutes
