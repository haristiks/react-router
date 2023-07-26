import React from 'react'
import { Link } from 'react-router-dom'


function Login() {

  return (
    <div className="container">
        <h1>Login</h1>
        <form>
            <label>Username:</label>
            <input type="text" id="username" name="username" required/>
            
            <label>Password:</label>
            <input type="password" id="password" name="password" required/>
            
            <Link to='/home'><button type="submit" >Login</button></Link>
        </form>
        <p>Don't have an account? <Link to="/registration">Register</Link></p>
    </div>
  )
}

export default Login