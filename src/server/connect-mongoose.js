import mongoose from 'mongoose'
import config from '../server/config'

const url = config.dbUrl
const options = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export function connectMongoose () {
  return mongoose.connect(url, options)
}
