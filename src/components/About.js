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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
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
