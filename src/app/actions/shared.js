import { defaultState } from '../../server/defaultState'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function getInitialData () {
  return {
    type: GET_INITIAL_DATA,
    defaultState
  }
}

