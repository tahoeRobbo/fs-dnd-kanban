import { defaultState } from './defaultState'
import { connectDB } from './connect-db'

(async function purgeDB () {
  let db = await connectDB()

  for (let collectionName in defaultState) {
    console.log(`removing documents from ${collectionName}`)
    await db.collection(collectionName).deleteMany({})
  }
})()
  .then(() => {console.log('Successfully purged db'); process.exit()})
  .catch((err) => {console.log(`Failed to purge db \n ${err}`); process.exit()})
