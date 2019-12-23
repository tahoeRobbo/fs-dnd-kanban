export const defaultState = {
  users: {
    'U1': {
      name: 'Rob',
      id: 'U1'
    }
  },
  groups: {
    'G1': {
      name: 'To Do',
      id: 'G1',
      owner: 'U1'
    },
    'G2': {
      name: 'Doing',
      id: 'G2',
      owner: 'U1'
    },
    'G3': {
      name: 'Done',
      id: 'G3',
      owner: 'U1'
    }
  },
  tasks: {
   'T1': {
      name: 'Walk Dogs',
      id: 'T1',
      group: 'G1',
      owner: 'U1',
      isComplete: false
    },
   'T4': {
      name: 'Walk Cats',
      id: 'T4',
      group: 'G1',
      owner: 'U1',
      isComplete: false
    },
   'T2': {
      name: 'build app',
      id: 'T2',
      group: 'G2',
      owner: 'U1',
      isComplete: false
    },
   'T3': {
      name: 'Take Shower',
      id: 'T3',
      group: 'G3',
      owner: 'U1',
      isComplete: false
    }
  },
  comments: {
    'C1': {
      id: 'C1',
      owner: 'U1',
      task: 'T1',
      content: 'Doggies gotta poopies'
    }
  }
}
