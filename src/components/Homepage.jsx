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
        <p className="my-2 my-md-4" style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p className="my-2 my-md-4" style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <p className="my-2 my-md-4" style={{ fontSize: "1.2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <Link to="/">
          <Button className={"btn btn-primary btn-lg mt-2 mb-5"} type="button">
            Klicka här
          </Button>
        </Link>
      </Section>
    </div>
  );
};

export default Homepage;
