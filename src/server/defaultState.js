export const devUser = [
  {
    name: 'Dev',
    password: 'test'
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
