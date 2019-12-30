const url = 'http://localhost:8888'

function _fetchData (type) {
  return window.fetch(`${url}/${type}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
}

export function getInitialData () {
  return Promise.all([
    _fetchData('groups'),
    _fetchData('tasks')
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
