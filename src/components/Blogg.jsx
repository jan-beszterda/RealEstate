import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Section from "./Section";
import Button from "./Button";
import Login from "./Login";
import CreateBlogg from "./CreateBlogg";

function Blogg() {
  const [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loginMessage, setLoginMessage] = useState("");

  const [buttonPopup, setButtonPopup] = useState(false);

  const [article, setArticle] = useState({
    title: "",
    text: "",
    url: "",
  });
  const [articles, setArticles] = useState([]);

  const handleLoginFieldChange = (fieldName, fieldValue) => {
    setLogin({ ...login, [fieldName]: fieldValue });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (login.userName === "admin" && login.password === "password") {
      setLogin({
        userName: "",
        password: "",
      });
      setIsLoggedIn(true);
      setLoginMessage("");
    } else {
      setLoginMessage("Felaktigt användarnamn eller lösenord");
    }
  };

  const handleArticleFieldChange = (fieldName, fieldValue) => {
    setArticle({ ...article, [fieldName]: fieldValue });
  };

  const handleArticleSubmit = (e) => {
    e.preventDefault();
    if (article.title && article.text) {
      const newArticle = { ...article, id: uuidv4() };
      setArticles([newArticle, ...articles]);
      setArticle({
        title: "",
        text: "",
        url: "",
      });
      setButtonPopup(false);
    }
  };

  const loginComponent = !isLoggedIn ? (
    <Login
      loginData={login}
      onChange={handleLoginFieldChange}
      submit={handleLoginSubmit}
      message={loginMessage}
    />
  ) : (
    <div className="row justify-content-end my-4">
      <div className="col-auto">
        <Button
          className="btn btn-primary btn-lg"
          onClick={() => setButtonPopup(true)}
        >
          Skapa Artikel
        </Button>
      </div>
      <div className="col-auto">
        <Button
          className="btn btn-dark btn-lg"
          onClick={() => {
            setIsLoggedIn(false);
            setButtonPopup(false);
          }}
        >
          Logga ut
        </Button>
      </div>
    </div>
  );

  useEffect(() => {
    if (localStorage.getItem("Logged in") !== null) {
      const loggedIn = JSON.parse(localStorage.getItem("Logged in"));
      setIsLoggedIn(loggedIn);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Logged in", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  useEffect(() => {
    const loadedArticles = JSON.parse(localStorage.getItem("Articles"));
    setArticles(loadedArticles);
  }, []);

  useEffect(() => {
    localStorage.setItem("Articles", JSON.stringify([...articles]));
  }, [articles]);

  return (
    <div className="container-sm">
      {loginComponent}
      <CreateBlogg
        data={article}
        onChange={handleArticleFieldChange}
        submit={handleArticleSubmit}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      ></CreateBlogg>
      <div className="row mb-4">
        <h1>Läs nyheter från bostadsmarkanden</h1>
      </div>
      {articles.map((article, index) => (
        <Section
          key={index}
          className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-3"}
        >
          <div className="col-md-4">
            <img className="blogg-pic img-fluid" src={article.url} alt="" />
          </div>
          <div className="col-md-8 mt-3 mt-md-0">
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <Button className="btn btn-primary btn-lg">Läs mer</Button>
          </div>
        </Section>
      ))}
      <Section className={"section-grey row row-cols-1 row-cols-md-2 mb-4 p-4"}>
        <div className="col-md-4">
          <img
            className="blogg-pic img-fluid"
            src="/images/Towers.jpg"
            alt=""
          />
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
          <img
            className="blogg-pic img-fluid"
            src="/images/Greece.jpg"
            alt=""
          />
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
          <img
            className="blogg-pic img-fluid"
            src="/images/Castle2.jpg"
            alt=""
          />
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
