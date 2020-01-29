export function loadLocalStorage (key) {
  try {
    const serializedState = window.localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (e) {
    console.error(`Error getting state from localStorage. Initializing reducers with undefined: ${e}`)
    return undefined
  }
}

export function saveLocalStorage (key, state) {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem(key, serializedState)
  } catch (e) {
    console.error(e)
  }
}

export function removeLocalStorage (key) {
  window.localStorage.removeItem(key)
}
