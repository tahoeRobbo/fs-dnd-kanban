import { getGroups } from '../utils/api'

export const SET_GROUPS = 'SET_GROUPS'

export function handleGetGroups () {
  return (dispatch) => {
    getGroups()
      .then((groups) => {
        dispatch(setGroups(groups))
      })
      .catch((err) => console.error(err))
  }
}

function setGroups (groups) {
  return {
    type: SET_GROUPS,
    groups
  }
}
