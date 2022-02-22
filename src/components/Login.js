import React from 'react'



function Login() {
  return (
     <div className="login-container">
     <div>
     <input type="text" className="username-input"></input>
     <p className="login-username">Username:</p>
     </div>

     <div>
     <input type="text" className="password-input"></input>
     <p className="login-password">Password:</p>
     </div>

     <button className="login-btn" type="submit" >Log In</button>
     
     </div>
   

   
  )
}

export default Login