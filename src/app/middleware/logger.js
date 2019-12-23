const logger = (store) => (next) => (action) => {
  console.group(action.type)
  console.log(`Current Action --`, action)
  const res = next(action)
  console.log(`Current State after action -- `, store.getState())
  console.groupEnd()
  return res
}

export default logger
