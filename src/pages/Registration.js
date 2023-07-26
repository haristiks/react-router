import React from 'react'
import { useNavigate,Link } from 'react-router-dom'


function Registration() {
  const goto=useNavigate()
  return (
    <div className="container">
        <h1>Registration</h1>
        <form>
            <label>Username:</label>
            <input type="text" id="username" name="username" required/>
            
            
            <label>Email:</label>
            <input type="email" id="email" name="email" required/>
            
            
            <label>Password:</label>
            <input type="password" id="password" name="password" required/>
            
            
            <button type="submit" onClick={()=>{goto("/login")}}>Register</button>
        </form>
        <p>Already have an account? <Link to="login">Login</Link></p>
    </div>
  )
}

export default Registration