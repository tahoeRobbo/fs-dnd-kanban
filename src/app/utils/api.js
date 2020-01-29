import { loadLocalStorage } from './localStorage'

let authToken = loadLocalStorage('user').token
const url = 'http://localhost:8888'
const headers = {
  'Content-Type': 'application/json'
}

const authHeader = {
  Authorization: `Bearer ${authToken}`
}

// for logout -> login as different user, used by setAuthToken middleware
export function setToken (token) {
  authHeader.Authorization = `Bearer ${token}`
  authToken = token
}

function _fetchData (type) {
  console.log('authHeader', authHeader)
  return window.fetch(`${url}/api/${type}`, {
    method: 'GET',
    headers: {
      ...headers,
      ...authHeader
    }
  })
    .then((res) => res.json())
    .then(({ data }) => {
      return data
    })
    .catch((err) => err)
}

export function getTasks () {
  return _fetchData('task')
}

export function getGroups () {
  return _fetchData('group')
}

export function getInitialData () {
  return Promise.all([
    _fetchData('group'),
    _fetchData('task')
  ])
    .then(([groups, tasks]) => ({ groups, tasks }))
    .catch((err) => err)
}

export function postNewTask (name) {
  const payload = JSON.stringify({ name })
  return window.fetch(`${url}/api/task/`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers,
      ...authHeader
    },
    body: payload
  })
}

export function postUpdateTask ({ task }) {
  const payload = JSON.stringify(task)
  return window.fetch(`${url}/api/task/${task._id}`, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      ...headers,
      ...authHeader
    },
    body: payload
  })
}

export function signin (credentials) {
  return window.fetch(`${url}/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers
    },
    body: JSON.stringify(credentials)
  })
}

export function signup (credentials) {
  return window.fetch(`${url}/signup`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      ...headers
    },
    body: JSON.stringify(credentials)
  })
}
