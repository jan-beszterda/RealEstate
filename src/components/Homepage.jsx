import React, {useState, useEffect} from "react"; 
import Section from "./Section"; 
import Button from "./Button"; 

const Homepage = () => { 
    useEffect (() => { 
    document.getElementById("main").classList.toggle("main-image");  
    }) 
    return (
    <div className="container"> 
      <Section className="section-home"> 
        <h1 style={{ lineHeight: "1.0" }}>Välkommen till Real Estate</h1> 
        <h5 style={{ lineHeight: "1.2" }}>Tillsammans hittar vi din drömbostad.</h5>

        <p>Vi är mäklarfirman som vågar dra ner på tempot, där vi har tid för både skratt och affärer och där både säljare och köpare är nöjda. 
        Vår förhoppning är att du ska vilja komma tillbaka till oss när det är dags att byta bostad, och att du 
        när som helst känner dig välkommen att komma förbi på en kopp kaffe och prata boende.</p>
        <p>Läs mer om våra tjänster vi erbjuder.</p> 
        {/* <Link to="/services"> */}
        <Button className="btn btn-primary btn-lg">Våra tjänster</Button> 
        {/*</Link>*/}
      </Section> 
    </div> 
    );
}; 

export default Homepage; 

