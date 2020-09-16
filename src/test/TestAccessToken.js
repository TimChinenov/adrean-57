export const refreshTokens = async () => {
  let tokens = {
    expires_in: 60 * 60 * 1000,
    access_token: 'testaccesstoken',
    refresh_token: 'testrefreshtoken'
  }
  return tokens
}

export const fakeUser = async () => {
  let user = {
    username: "user1",
    password: "user1"
  }
}
