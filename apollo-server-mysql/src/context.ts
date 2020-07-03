import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export type user = {
  user_id: number
  user_name: string
}

export interface Context {
  prisma: PrismaClient,
  user: user
}

const getUser = (token: string) => {
  try {
    if (token) {
      return jwt.verify(token, process.env.JWT_SECRET || 'any') as user
    }
    return null
  } catch (err) {
    return null
  }
}

export function createContext(req: any): Context {
    const tokenWithBearer = req.headers.authorization || ''
    const token = tokenWithBearer.split(' ')[1]
    let user = getUser(token)
    if (!user) 
      user = { user_name: 'no name', user_id: 0 }
    return {
      user,
      prisma, 
    }
}
