import React, { useState, useEffect } from 'react'

function useLoggedIn () {
  const [loggedIn, setLoggedIn] = useState(null)

  useEffect(() => {
    setLoggedIn(window.localStorage.getItem('token'))
  }, [loggedIn])

  return loggedIn
}
export default useLoggedIn

