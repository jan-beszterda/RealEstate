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
        <p className="mt-3" style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus
          nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis
          velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit,
          elementum orci ut, ullamcorper lacus. Donec cursus mauris vitae turpis
          auctor, in sollicitudin ligula ultrices. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur suscipit pretium arcu ut
          sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor
          velit ut facilisis ullamcorper.
        </p>
        <Link to="/forsale">
          <Button className="btn btn-primary btn-lg">Objekt till salu</Button>
        </Link>
      </Section>
      <Section className="my-5">
        <h2 className="text-center" style={{ letterSpacing: "2px" }}>
          Vi hjälper dig sälja din bostad!
        </h2>
        <p className="mt-3" style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed tempus
          nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut iaculis
          velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem blandit,
          elementum orci ut, ullamcorper lacus. Donec cursus mauris vitae turpis
          auctor, in sollicitudin ligula ultrices. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur suscipit pretium arcu ut
          sollicitudin. Proin non lorem est. Sed tempus nulla nulla. Sed tempor
          velit ut facilisis ullamcorper.
        </p>
        <Link to="/contact">
          <Button className="btn btn-primary btn-lg">Kontakta oss</Button>
        </Link>
      </Section>
    </div>
  );
}

export default Services;
