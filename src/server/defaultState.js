import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

export const defaultState = {
  users: [
    {
      name: 'Dev',
      id: 'U1',
      password: bcrypt.hashSync('test', 10)
    }
  ],
  groups: [
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
  tasks: [
    {
      name: 'Walk Dogs',
      id: 'T1',
      group: 'G1',
      owner: 'U1',
      created: Date.now(),
      isComplete: false
    },
    {
      name: 'build app',
      id: 'T2',
      group: 'G2',
      owner: 'U1',
      created: Date.now(),
      isComplete: false
    },
    {
      name: 'Take Shower',
      id: 'T3',
      group: 'G3',
      owner: 'U1',
      created: Date.now(),
      isComplete: false
    }
  ],
  comments: [
    {
      id: 'C1',
      owner: 'U1',
      task: 'T1',
      content: 'Doggies gotta poopies'
    }
  ]
}
