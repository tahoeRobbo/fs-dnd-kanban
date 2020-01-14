import { defaultState } from './defaultState'
import { connectMongoose } from './connect-mongoose'
import { User } from './resources/user/user.model'
import { Task } from './resources/task/task.model'
import { Group } from './resources/group/group.model'

(async function initializeDB () {
  const db = await connectMongoose()

  for (const collectionName in defaultState) {
    console.log(`initializing data in ${collectionName}`)
    await db.collection(collectionName).insertMany(defaultState[collectionName])
  }
})()
  .then(() => { console.log('successfully initialized DB'); process.exit() })
  .catch((err) => { console.log(`Failed to initialize db \n ${err}`); process.exit() })
