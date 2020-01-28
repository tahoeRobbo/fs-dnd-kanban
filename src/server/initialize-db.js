import { defaultState, devUser } from './defaultState'
import { connectMongoose } from './connect-mongoose'
import { User } from './resources/user/user.model'
import { Task } from './resources/task/task.model'
import { Group } from './resources/group/group.model'

const models = [
  Task,
  Group
];

(async function initializeDB () {
  await connectMongoose()

  try {
    console.log('devUser[0]', devUser[0])
    const dev = await User.create(devUser[0])
    console.log(`success.  dev user -- ${dev}`)

    defaultState.task = defaultState.task.map((task) => {
      return {
        ...task,
        owner: dev._id
      }
    })

    const promises = models.map(async (model) => {
      console.log('initializing ', model.modelName)
      await model.create(defaultState[model.modelName])
      console.log(console.log('success'))
    })

    await Promise.all(promises)
    console.log('successfully initialized DB')
    process.exit()
  } catch (e) {
    console.error(`Failed to initialize db \n ${e}`)
    process.exit()
  }
})()
