import { User } from './user.model'

export const userController = {
  getCurrentUser,
  updateCurrentUser
}

export function getCurrentUser (req, res) {
  res.status(200).json({ data: req.user })
}

export async function updateCurrentUser (req, res) {
  try {
    const user = User.findOneAndUpdate(
      req.user._id,
      req.body,
      { new: true }
    )
      .lean()
      .exec()

    res.status(200).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
