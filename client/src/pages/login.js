import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} id="login-form">
      <h1>Login</h1>
      <input 
        name="email"
        placeholder="Email"
        type="email" 
      />
      <input 
        name="password"
        placeholder="Password"
        type="password" 
      />
      <button>Login</button>
    </form>
  )
}

export default Login