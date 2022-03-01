import React, {useState, useEffect} from 'react'

import Section from './Section'
import Button from './Button'
import Login from './Login'


function Blogg() {

    const [login, setLogin] = useState({ //useState for login data (username and password)
        userName: "",
        password: "",
      });
    const [isLoggedIn, setIsLoggedIn] = useState(false); //useState for successfull login

    const handleFieldChange = (fieldName, fieldValue) => { //Login data is set to what comes from the form
        setLogin({ ...login, [fieldName]: fieldValue });
      };

    const handleSubmit = (e) => { //When form is submitted and username and password are correct login is set to true
        e.preventDefault();
        if (
          login.userName === "admin" &&
          login.password === "password"
        ) {
          setLogin({
            userName: "",
            password: "",
          });
          setIsLoggedIn(true);
        }
      };
    
      useEffect(() => { //Log in (true/false) is saved in local storage 
        localStorage.setItem("Logged in", JSON.stringify([isLoggedIn]));
      }, [isLoggedIn]);
    
     //Login component med props (login, change and submit methods)

    

  return (
    <div>
        <div>
            <h1>Läs nyheter från bostadsmarkanden</h1>
        </div>
        <div className='d-flex justify-content-end'>
            <Login loginData={login} onChange={handleFieldChange} submit={handleSubmit}></Login>
        </div>
        <Section className={"row"}>
            <div className='col-3 h-100'><img className='blogg-pic' src="/bild/house.jpg" alt="" /></div>
            <div className='col-9 h-100'>
            <h3>Artikel headline</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus.</p>
            <Button className="btn btn-primary mb-4">Läs mer</Button></div>
        </Section>
        <Section className={"row"}>
            <div className='col-3 h-100'><img className='blogg-pic' src="/bild/house.jpg" alt="" /></div>
            <div className='col-9 h-100'>
            <h3>Artikel headline</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus.</p>
            <Button className="btn btn-primary mb-4">Läs mer</Button></div>
        </Section>
        <Section className={"row"}>
            <div className='col-3 h-100'><img className='blogg-pic' src="/bild/house.jpg" alt="" /></div>
            <div className='col-9 h-100'>
            <h3>Artikel headline</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit, elementum orci ut, ullamcorper lacus.</p>
            <Button className="btn btn-primary mb-4">Läs mer</Button></div>
        </Section>
        
    </div>
  )
}

export default Blogg