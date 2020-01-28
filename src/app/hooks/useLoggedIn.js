import React, { useState, useMemo, useEffect } from 'react'
import { useSelector } from 'react-redux'

function useLoggedIn () {
  const user = useSelector(store => store.users)
  const [loggedIn, setLoggedIn] = useState(user.token !== undefined)

  useEffect(() => {
    setLoggedIn(user.token !== undefined)
  }, [user.token])

  return loggedIn
}
export default useLoggedIn
