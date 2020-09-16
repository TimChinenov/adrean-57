import React from 'react'
import { authenticate, isAuthenticated } from './Authentication.js'
import { Route } from 'react-router-dom'
import AuthenticateBeforeRender from './AuthenticateBeforeRender'

const AuthenticatedRoute = ({
  component: Component,
  exact,
  path
}) => (
  <Route
    exact={exact}
    path={path}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <AuthenticateBeforeRender render={() => <Component {...props} /> } />
      )
    }
  />
)

export default AuthenticatedRoute
