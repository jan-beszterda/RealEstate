import { useEffect } from "react";
import { Link } from "react-router-dom";

import Section from "./Section";
import Button from "./Button";

const Homepage = () => {
  useEffect(
    () => document.getElementById("main").classList.add("main-image"),
    []
  );

  useEffect(
    () => () => document.getElementById("main").classList.remove("main-image"),
    []
  );

  return (
    <div className="container-sm container-sm my-3 my-md-5 p-3 p-md-5">
      <Section className="section-home section-grey p-4">
        <h1
          className="mt-5 mb-4"
          style={{ letterSpacing: "3px", lineHeight: "1.5" }}
        >
          Välkommen till Real Estate
        </h1>
        <h5 style={{ lineHeight: "1.2" }}>Tillsammans hittar vi din drömbostad.</h5>
        <p className="my-2 my-md-4" style={{ fontSize: "1.2rem" }}>
          Vi är mäklarfirman som vågar dra ner på tempot, där vi har tid för både skratt och affärer och där både säljare och köpare är nöjda. 
        Vår förhoppning är att du ska vilja komma tillbaka till oss när det är dags att byta bostad, och att du 
        när som helst känner dig välkommen att komma förbi på en kopp kaffe och prata boende.
        </p>
        <p className="my-2 my-md-4" style={{ fontSize: "1.2rem" }}>
          Läs mer om våra tjänster vi erbjuder.
        </p>
        <Link to="/services">
          <Button className={"btn btn-primary btn-lg mt-2 mb-5"} type="button">
            Våra tjänster
          </Button>
        </Link>
      </Section>
    </div>
  );
};

export default Homepage;
