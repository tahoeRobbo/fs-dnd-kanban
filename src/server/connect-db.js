import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost:27017/dndtasks'
let db = null

export function connectDB () {
  if (db) {
    return db
  }

  return MongoClient.connect(url, { useNewUrlParser: true })
    .then((client) => {
      db = client.db()
      return db
    })
}

connectDB()
