import { defaultState } from './defaultState'
import { connectDB } from './connect-db'

(async function initializeDB () {
  const db = await connectDB()

  for (const collectionName in defaultState) {
    console.log(`initializing data in ${collectionName}`)
    await db.collection(collectionName).insertMany(defaultState[collectionName])
  }
})()
  .then(() => { console.log('successfully initialized DB'); process.exit() })
  .catch((err) => { console.log(`Failed to initialize db \n ${err}`); process.exit() })
