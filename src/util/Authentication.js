import React, { setState } from 'react'
import history from './history'
import { refreshTokens, fakeUser } from '../test/TestAccessToken'


const Cookies = require('js-cookie');

export const getAccessToken = () => Cookies.get('access_token')
export const getRefreshToken = () => Cookies.get('refresh_token')
export const isAuthenticated = () => !!getAccessToken()

export const login = async ({username, password}) => {
  if (username === fakeUser.username && password === fakeUser.password) {
    const tokens = await refreshTokens();
    Cookies.set('access_token', tokens.access_token, { expires: 60 * 60 * 1000} )
    Cookies.set('refresh_token', tokens.refresh_token, tokens.refresh_token )
  }
}

export const authenticate = async () => {
  if(getRefreshToken()) {
    try {
      const tokens = await refreshTokens() // API that needs to be added
      const expires = (tokens.expires_in || 60 * 60) * 1000
      const inOneHour = new Date(new Date().getTime() + expires)

      Cookies.set('access_token', tokens.access_token, { expires: inOneHour} )
      Cookies.set('refresh_token', tokens.refresh_token, tokens.refresh_token )

      return true
    } catch (error) {
      redirectToLogin()
      return false
    }
  }

  redirectToLogin()
  return false
}

export const redirectToLogin = () => {
  history.push('/login')
}
