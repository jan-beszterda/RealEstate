import { useState, useEffect } from "react";

import Section from "./Section";
import Button from "./Button";
import Login from "./Login";
import CreateBlogg from "./CreateBlogg";
import {v4 as uuidv4} from "uuid"


function Blogg() {

  const [article, setArticle] = useState({
    title: "",
    text: "",
    url: "",
  });

  const [articles, setArticles] = useState([]);
  const handleArticelFieldChange = (fieldName, fieldValue) => {
    setArticle({ ...article, [fieldName]: fieldValue });
  };

  const handleArticelSubmit = (e) => {
    e.preventDefault();
    if (
      article.title &&
      article.text &&
      article.url ) {
      const newArticle = { ...article, id: uuidv4() };
      setArticles([...articles, newArticle]);
      setArticle({
        title: "",
        text: "",
        url: "",
      });
    }
  };


const [buttonPopup, setButtonPopup] = useState(false);
  
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
      <div>
        <Button className="btn btn-primary mb-4" onClick={() => setButtonPopup(true)}>
          Skapa Artikel
        </Button>
        <CreateBlogg trigger={buttonPopup} setTrigger={setButtonPopup}></CreateBlogg>

        <Button className="btn btn-primary mb-4">Logga ut</Button>

      </div>
      <Login
        loginData={login}
        onChange={handleFieldChange}
        submit={handleSubmit}
      />

      <div className="row mb-4">
        <h1>Läs nyheter från bostadsmarkanden</h1>
      </div>
      
      {articles.map((article) => (
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-3"}>
        <div className="col-md-4">
          <img className="blogg-pic img-fluid" src={article.url} alt="" />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>{article.title}</h3>
          <p>
            {article.text}
          </p>
          <Button className="btn btn-primary btn-lg">Läs mer</Button>
          </div>
          </Section>))}
      
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-4"}>
        <div className="col-md-4">
          <img className="blogg-pic img-fluid" src="/images/Towers.jpg" alt="" />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>Vacker utsikt men höga priser</h3>
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
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-4"}>
        <div className="col-md-4">
          <img className="blogg-pic img-fluid" src="/images/Greece.jpg" alt="" />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>Vart i Grekland ska jag köpa bostad?</h3>
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
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-4"}>
        <div className="col-md-4">
          <img className="blogg-pic img-fluid" src="/images/Castle2.jpg" alt="" />
        </div>
        <div className="col-md-8 mt-3 mt-md-0">
          <h3>Har du någonsin velat äga ett slott?</h3>
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
