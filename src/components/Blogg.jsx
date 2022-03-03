import { useState, useEffect } from "react";

import Section from "./Section";
import Button from "./Button";
import Login from "./Login";

function Blogg() {
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFieldChange = (fieldName, fieldValue) => {
    setLogin({ ...login, [fieldName]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login.userName === "admin" && login.password === "password") {
      setLogin({
        userName: "",
        password: "",
      });
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("Logged in", JSON.stringify([isLoggedIn]));
  }, [isLoggedIn]);

  return (
    <div className="container-sm">
      <Login
        loginData={login}
        onChange={handleFieldChange}
        submit={handleSubmit}
      />
      <div className="row my-4">
        <h1>Läs nyheter från bostadsmarkanden</h1>
      </div>
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-3"}>
        <div className="col-md-4">
          <img className="blogg-pic img-fluid" src="/bild/house.jpg" alt="" />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>Artikel headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed
            tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut
            iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem
            blandit, elementum orci ut, ullamcorper lacus.
          </p>
          <Button className="btn btn-primary btn-lg">Läs mer</Button>
        </div>
      </Section>
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-3"}>
        <div className="col-md-4">
          <img className="blogg-pic img-fluid" src="/bild/house.jpg" alt="" />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>Artikel headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed
            tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut
            iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem
            blandit, elementum orci ut, ullamcorper lacus.
          </p>
          <Button className="btn btn-primary btn-lg">Läs mer</Button>
        </div>
      </Section>
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-3"}>
        <div className="col-md-4">
          <img className="blogg-pic img-fluid" src="/bild/house.jpg" alt="" />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>Artikel headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            suscipit pretium arcu ut sollicitudin. Proin non lorem est. Sed
            tempus nulla nulla. Sed tempor velit ut facilisis ullamcorper. Ut
            iaculis velit vitae enim rhoncus luctus id rutrum nisl. Sed sed sem
            blandit, elementum orci ut, ullamcorper lacus.
          </p>
          <Button className="btn btn-primary btn-lg">Läs mer</Button>
        </div>
      </Section>
    </div>
  );
}

export default Blogg;
