import React, { useState, useEffect } from 'react'
import { authenticate, isAuthenticated } from './Authentication.js'

export default function AuthenticateBeforeRender({component}) {
  const [authenticateState, setAuthenticatedState] = useState(isAuthenticated)

  useEffect(() => {
    authenticate().then(isAuthenticated => {
      setAuthenticatedState({authenticateState})
    })
  }, [])

  return authenticateState ? component : null
}
