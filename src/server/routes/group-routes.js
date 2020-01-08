import express from 'express'
import { getCollectionData } from '../server'

const groupsRouter = express.Router()

groupsRouter.route('/groups')
  .get(async (req, res) => {
    await getCollectionData('groups')
      .then((groups) => res.send(groups))
      .catch((err) => res.send(err))
  })

export default groupsRouter
