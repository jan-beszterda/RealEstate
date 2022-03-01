import React, {useState, useEffect} from 'react'
import Button from './Button'


function Login() {

  // dessa värden är det som ska matas in i login formen, username och lösen är inte definerade 
  
const [value, setValue] = useState({
  userName: '',
  password: '',
})

const [submitet, setSubmitet] = useState(false)

// min metod för det som sker när man har matat in sina uppgifter

  const correctPassword = "password"
  const CorrectUsername = "username"

 const handleSubmit = (event) => {
   event.preventDefault();
   if(value.userName === CorrectUsername && value.password === correctPassword) {setSubmitet(true);
    }

    else{
      alert("Fel användarnamn eller lösenord... Försök igen! ")
    }

   
 }
// (event) är det som händer  inom input rutorna jag ber programmet att kopiera in den tomma strängen (...) för att sedan setta värdet till det som skrivs in i input rutan detta kallas inom onChange

  const userNameHandler  = (event) =>{
    setValue({...value, userName: event.target.value})
  }
  const passwordHandler  = (event) =>{
    setValue({...value, password: event.target.value})
  }
  

 

  return (
    <>

    {handleSubmit && !value.userName ? <span className="username-enter"></span> : null}
    {handleSubmit && !value.password ? <span className="password-enter"></span> : null}
     {submitet ? <div className="succses-msg"> Logged In</div> : null}
     

     <div className="login-container">
     <form onSubmit = {handleSubmit}>

       <span className='line'>

     <div className='test'>
     <input type="text" className="username-input" placeholder='Användarnamn' value = {value.userName} onChange={userNameHandler}></input>
     </div>

     <div className='test'>
     <input type="text" className="password-input" placeholder='Lösenord' value = {value.password} onChange={passwordHandler}></input>
     </div>

     <Button className="btn btn-primary" type="submit">
          Logga in
        </Button> 

        </span>  

     </form>
     </div>
   </>

   
  )
}

export default Login