import config from '../config'
import jwt from 'jsonwebtoken'
import { User } from '../resources/user/user.model'

function newToken (user) {
  return jwt.sign({ id: user._id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

function verifyToken (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) {
        return reject(err)
      }

      resolve(payload)
    })
  })
}

export async function signup (req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({ message: 'Must have username and password' })
  }

  try {
    const user = await User.create(req.body)
    const token = newToken(user)
    return res.status(201).send({ token })
  } catch (e) {
    console.warn('e', e)
    return res.status(500).end()
  }
}

export async function signin (req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send({ message: 'Must have username and password' })
  }

  try {
    const user = await User.findOne({ username: req.body.username })
      .select('username password')
      .exec()

    const match = await user.checkPassword(req.body.password)

    if (!match) {
      return res.status(401).json({ message: 'Invalid username and password combination' })
    }

    const token = newToken(user)
    user.password = undefined
    return res.status(200).send({
      user,
      token
    })
  } catch (e) {
    console.error(e)
    res.status(500).end()
  }
}

export async function protect (req, res, next) {
  const bearer = req.headers.authorization

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end()
  }

  const token = bearer.split('Bearer ')[1].trim()
  let payload
  try {
    payload = await verifyToken(token)
  } catch (e) {
    return res.status(401).end()
  }

  const user = await User.findById(payload.id)
    .select('-password')
    .lean()
    .exec()

  if (!user) {
    return res.status(401).end()
  }

  req.user = user
  next()
}
