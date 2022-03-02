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
    <div className="container-sm" style={{ height: "100vh" }}>
      <Section className="section-home section-grey p-4">
        <h1 className="my-3">Välkommen till Real Estate</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Link to="/">
          <Button className={"btn btn-primary btn-lg"} type="button">
            Klicka här
          </Button>
        </Link>
      </Section>
    </div>
  );
};

export default Homepage;
