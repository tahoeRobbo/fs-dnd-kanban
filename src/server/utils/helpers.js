export function formatNewTask (name) {
  return {
    name,
    id: generateId(),
    group: 'G1',
    owner: 'U1', // todo update once auth implemented,
    created: Date.now(),
    isComplete: false
  }
}

export function generateId () {
  return Math.random().toString(16).substr(2, 10)
}
