export function generateId () {
  return Math.random().toString(16).substr(2, 10)
}
