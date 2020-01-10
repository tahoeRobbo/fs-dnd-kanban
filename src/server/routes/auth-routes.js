import express from 'express'
import bcrypt from 'bcrypt'

import { connectDB } from '../connect-db'

const authRouter = express.Router()

export async function getUserData (username) {
  const db = await connectDB()
  return db.collection('users').find({ name: username }, { projection: { _id: 0 }}).next()
}

async function checkAuth (password, hash) {
  return bcrypt.compare(password, hash)
}

authRouter.route('/')
  .post( async (req, res) => {
    const user = await getUserData(req.body.username)
    const authed = await checkAuth(req.body.password, user.password)
    if (authed) {
      delete user.password
      return res.send({
        ...user,
        authed
      })
    }
    return res.status(401)
  })

export default authRouter
