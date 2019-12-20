export const defaultState = {
  users: [
    {
      name: 'Rob',
      id: 'U1'
    }
  ],
  groups: [
    {
      name: 'To Do',
      id: 'G1',
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
