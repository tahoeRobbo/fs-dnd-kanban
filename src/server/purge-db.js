import { connectMongoose } from './connect-mongoose'
import { Task } from './resources/task/task.model'
import { User } from './resources/user/user.model'
import { Group } from './resources/group/group.model'

const models = [
  Task,
  User,
  Group
];

(async function purgeDB () {
  await connectMongoose()

  try {
    const promises = models.map(async (model, i) => {
      console.log(`removing documents from ${models[i]}`)
      await model.deleteMany({})
    })

    await Promise.all(promises)
    console.log('Successfully purged db')
    process.exit()
  } catch (e) {
    console.error(`Failed to purge db \n ${e}`)
    process.exit()
  }
})()
