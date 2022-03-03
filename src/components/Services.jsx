import { Link } from "react-router-dom";
import Button from "./Button";
import Section from "./Section";

function Services() {
  return (
    <div className="container-sm my-4">
      <div className="mb-3">
        <h1 className="text-center" style={{ letterSpacing: "3px" }}>
          Våra tjänster
        </h1>
      </div>
      <Section className="my-5">
        <h2 className="text-center" style={{ letterSpacing: "2px" }}>
          Letar du efter en ny bostad?
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          Funderar du på att flytta? Är det dags för ett nytt steg i livet? Du
          har kommit till rätt plats.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Vi hjälper dig att hitta din drömbostad oavsett om du letar efter en
          lägenhet eller en villa. Vi har bra kontakter med landets största
          banker och kan hjälpa dig med ansökan om bolån.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Ta en titt på objekt vi har till salu just nu. Vi hoppas att du kommer
          hitta det du letar efter.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Vi ser framemot att höra från dig och svarar direkt ifall du har några
          frågor.
        </p>
        <Link to="/forsale">
          <Button className="btn btn-primary btn-lg">Objekt till salu</Button>
        </Link>
      </Section>
      <Section className="my-5">
        <h2 className="text-center" style={{ letterSpacing: "2px" }}>
          Vi hjälper dig sälja din bostad!
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          Vi kan hjölpa dig när det blir dags att sälja din nuvarande bostad?
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Vi har mycket erfarenhet av försäljning av lägenheter och villor. Vi
          ordnar styling, fotografering och marknadsföring av dn bostad. Vi
          driver egen budgivningssystem och är i ständigt kontakt med banker.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Om du är intresserad och vill börja försälningsprocessen tveka inte
          att kontakta oss.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Vi ser framemot att höra från dig och diskutera hur kan vi hjälpa dig
          på bästa sätt.
        </p>
        <Link to="/contact">
          <Button className="btn btn-primary btn-lg">Kontakta oss</Button>
        </Link>
      </Section>
    </div>
  );
}

export default Services;
