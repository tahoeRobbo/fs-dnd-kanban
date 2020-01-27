import React, { useState, useMemo, useEffect } from 'react'

function useLoggedIn () {
  const [loggedIn, setLoggedIn] = useState(window.localStorage.getItem('token'))

  useEffect(() => {
    setLoggedIn(window.localStorage.getItem('token'))
  }, [loggedIn])

  return loggedIn
}
export default useLoggedIn
