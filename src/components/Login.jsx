import React, {useState, useEffect} from 'react'
import Button from './Button'



const Login = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.name, e.target.value); //Local onChange method calls onChange method passed through props
      };
    
  return ( 
    <>
    {/* {handleSubmit && !value.userName ? <span className="username-enter"></span> : null}
    {handleSubmit && !value.password ? <span className="password-enter"></span> : null}
     {submitet ? <div className="succses-msg"> Logged In</div> : null} */}
     

     <div className="login-container">
     <form onSubmit = {props.submit}>

       <span className='line'>

     <div className='test'>
     <input type="text" className="username-input" name="userName" placeholder='Användarnamn' value={props.loginData.userName} onChange={handleChange}/>
     </div>

     <div className='test'>
     <input type="text" className="password-input" name="password" placeholder='Lösenord' value={props.loginData.password} onChange={handleChange}/>
     </div>

     <Button className="btn btn-primary" type="submit" > Logga in </Button> 
        
        </span>  

     </form>
     </div>
   </>

   
  )
}

export default Login