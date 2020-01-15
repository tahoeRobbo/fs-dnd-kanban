const url = 'http://localhost:8888'
const token = window.localStorage.getItem('token')

function _fetchData (type) {
  return window.fetch(`${url}/api/${type}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then((res) => res.json())
    .then(({ data }) => {
      console.log('data from fetchData', data)
      return data
    })
    .catch((err) => err)
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
  const payload = JSON.stringify({ taskName: name })
  return window.fetch(`${url}/task/new`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json'
    },
    body: payload
  })
}

export function postUpdateTask (task) {
  console.log('task inside postUpdateTask', task)
  const payload = JSON.stringify(task)
  return window.fetch(`${url}/task/update`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json'
    },
    body: payload
  })
}

export function signin (credentials) {
  return window.fetch(`${url}/signin`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
}
