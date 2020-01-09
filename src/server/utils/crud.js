import { connectDB } from '../connect-db'

export async function getAllFromCollection (collectionName) {
  const db = await connectDB()
  return db.collection(collectionName).find({}).toArray()
}
