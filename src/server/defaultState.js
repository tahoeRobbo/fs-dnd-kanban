import bcrypt from 'bcrypt'

export const defaultState = {
  users: [
    {
      name: 'Rob',
      id: 'U1',
      password: bcrypt.hashSync('grateful', 10)
    }
  ],
  groups: [
    {
      name: 'To Do',
      id: 'G1',
      owner: 'U1'
    },
    {
      name: 'Doing',
      id: 'G2',
      owner: 'U1'
    },
    {
      name: 'Done',
      id: 'G3',
      owner: 'U1'
    }

  ],
  tasks: [
    {
      name: 'Walk Dogs',
      id: 'T1',
      group: 'G1',
      owner: 'U1',
      isComplete: false
    },
    {
      name: 'build app',
      id: 'T2',
      group: 'G2',
      owner: 'U1',
      isComplete: false
    },
    {
      name: 'Take Shower',
      id: 'T3',
      group: 'G3',
      owner: 'U1',
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
