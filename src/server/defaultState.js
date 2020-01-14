import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

export const devUser = [
  {
    name: 'Dev',
    password: bcrypt.hashSync('test', 10)
  }
]

export const defaultState = {
  group: [
    {
      name: 'To Do'
    },
    {
      name: 'Doing'
    },
    {
      name: 'Done'
    }

  ],
  task: [
    {
      name: 'Walk Dogs',
      group: 'To Do',
      owner: null,
      isComplete: false
    },
    {
      name: 'build app',
      group: 'To Do',
      owner: null,
      isComplete: false
    },
    {
      name: 'Take Shower',
      group: 'To Do',
      owner: null,
      isComplete: false
    }
  ]
}
