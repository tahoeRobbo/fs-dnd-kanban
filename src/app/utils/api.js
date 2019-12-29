const url = 'http://localhost:8888'

function _fetchData (type) {
  return fetch(`${url}/${type}`)
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
  const payload = JSON.stringify( {taskName: name} )
  return fetch(`${url}/task/new`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },
    body: payload
  })
}
