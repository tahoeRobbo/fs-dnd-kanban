import { Task } from './task.model'
import mongoose from 'mongoose'
// import { connectDB } from '../../connect-db'
import { connectMongoose } from '../../connect-mongoose'

const run = async () => {
  console.log('inside run')
  await connectMongoose()
  console.log('mongoose connected')
  console.log('creating new task...')
  const task = await Task.create({
    name: 'created through mongoose',
    group: mongoose.Types.ObjectId(),
    owner: mongoose.Types.ObjectId()
  })
  console.log('new task', task)
  console.log('finding by ID...')
  const found = await Task.findById(task._id)
  console.log('found... \n', found)
  console.log('updating task...')
  const updated = await Task.findByIdAndUpdate(
    task._id,
    {
      name: 'Updated Name',
      isComplete: true
    },
    { new: true }
  ).exec()
  console.log('updated... \n', updated)
  console.log('removing...')
  const removed = await Task.findByIdAndRemove(task._id).exec()
  console.log('removed... \n', removed)
}

run()
