import mongoose from 'mongoose'

const url = 'mongodb://localhost:27017/dndtasks'
const options = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export function connectMongoose () {
  return mongoose.connect(url, options)
}
