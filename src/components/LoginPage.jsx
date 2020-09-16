import React from 'react'
import { Form, Button } from 'react-bootstrap'
import tw from 'twin.macro'

export default function LoginPage() {
  
  return (
    <div>
      <form>
        <div>
        <label>
          Username:
        </label>
        <input type="text" name="email" />
        </div>
        <div>
        <label>
          Password:
        </label>
        <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}
