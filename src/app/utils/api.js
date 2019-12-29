const url = 'http://localhost:8888'

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
