import Section from "./Section";

const About = () => {
  return (
    <div className="container-sm">
      <Section className={"d-flex flex-column"}>
        <h1 className="text-center mb-3">Om Real Estate</h1>
        <img
          className="img-fluid about-image align-self-center mb-3"
          src="/images/living-room4.jpg"
          alt="..."
        />
        <p style={{ fontSize: "1.2rem" }}>
          Vi är mäklarfirman som vågar dra ner på tempot, där vi har tid för
          både skratt och affärer och där både säljare och köpare är nöjda. Vår
          förhoppning är att du ska vilja komma tillbaka till oss när det är
          dags att byta bostad, och att du när som helst känner dig välkommen
          att komma förbi på en kopp kaffe och prata boende.
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </Section>
    </div>
  );
};

export default About;
