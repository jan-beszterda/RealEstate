import React, {useState, useEffect} from 'react'


function Login() {

  // dessa värden är det som ska matas in i login formen, username och lösen är inte definerade 
  
const [value, setValue] = useState({
  userName: '',
  password: '',
})

// min metod för det som sker när man har matat in sina uppgifter
  function submitHandler(){
  Event.preventDefault()
    console.log("submitet")
  }
// (event) är det som händer  inom input rutorna jag ber programmet att kopiera in den tomma strängen (...) för att sedan setta värdet till det som skrivs in i input rutan detta kallas inom onChange

  const userNameHandler  = (event) =>{
    setValue({...value, userName: event.target.value})
  }
  const passwordHandler  = (event) =>{
    setValue({...value, password: event.target.value})
  }
  return (
     <div className="login-container">
     <form><div>
     <input type="text" className="username-input" value = {value.userName} onChange={userNameHandler}></input>
     <p className="login-username">Username:</p>
     </div>
     
    <div>
     <input type="text" className="password-input" value = {value.password} onChange={passwordHandler}></input>
     <p className="login-password">Password:</p>
     </div>

     <button className="login-btn" type="submit" onClick={submitHandler}>Log In</button>
     </form>
     
     </div>
   

   
  )
}

export default Login