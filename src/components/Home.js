import React, {useState, useEffect} from "react";
import Section from "./Section";
import Button from "./Button";

const Home = () => {
    useEffect (() => {
        document.getElementById("main").classList.toggle("main-image"); 
        } )
    return (
        
        <div className="container">
        
        <Section className="section-home">
        <h1>Real Estate</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  </p>
        <Button>Klicka här</Button>
        </Section>
       
        </div>

    );
};

export default Home;