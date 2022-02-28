import React, {useState, useEffect} from 'react'


function Login() {

  // dessa värden är det som ska matas in i login formen, username och lösen är inte definerade 
  
const [value, setValue] = useState({
  userName: '',
  password: '',
})

const [logout, setLogout] = useState(false)
const [submitet, setSubmitet] = useState(false)

// min metod för det som sker när man har matat in sina uppgifter

  const correctPassword = "password"
  const CorrectUsername = "username"

 const handleSubmit = (event) => {
   event.preventDefault();
   if(value.userName === CorrectUsername && value.password === correctPassword) {setSubmitet(true)
     setLogout(true)}  

    else{
      alert("Please enter your correct password")
    }

   
 }
// (event) är det som händer  inom input rutorna jag ber programmet att kopiera in den tomma strängen (...) för att sedan setta värdet till det som skrivs in i input rutan detta kallas inom onChange

  const userNameHandler  = (event) =>{
    setValue({...value, userName: event.target.value})
  }
  const passwordHandler  = (event) =>{
    setValue({...value, password: event.target.value})
  }
  
  const logoutHandler = (event) =>{
    event.preventDefault()
    setLogout(false);
    setSubmitet(false);
  }
  
 

  return (
    <div > 

    
     { !submitet ?<div className="login-container">
     
     <form onSubmit = {handleSubmit}>
     <div>
     <input type="text" className="username-input" value = {value.userName} onChange={userNameHandler}></input>
     <p className="login-username">Username:</p>
    
     </div>
     
    <div className="password-container">
     <input type="text" className="password-input" value = {value.password} onChange={passwordHandler}></input>
     <p className="login-password">Password:</p>
     
     </div>

     <button className="login-btn" type="submit" >Log In</button>
 
     </form>
     
     </div>: null}
     { logout ?<button className="logout-btn" type="submit" onClick={logoutHandler}>Log Out</button> : null}
   </div> 

   
  )
}

export default Login