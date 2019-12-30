import { getInitialData } from '../utils/api'

export const SET_INITIAL_DATA = 'SET_INITIAL_DATA'

// fetches and returns obj containing groups and tasks
export function handleGetInitialData() {
  return (dispatch) => {
    getInitialData()
      .then((data) => dispatch(setInitialData(data)))
      .catch((err) => err)
  }
}

function setInitialData (data) {
  return {
    type: SET_INITIAL_DATA,
    data
  }
}
