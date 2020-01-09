import { getAllFromCollection } from '../../utils/crud'

export const groupController = {
  getAllGroups
}

export async function getAllGroups (req, res) {
  try {
    const groups = await getAllFromCollection('groups')
    res.status(200).send(groups)
  } catch (err) {
    console.error(err)
  }
}
