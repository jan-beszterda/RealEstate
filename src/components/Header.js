import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const show = showMenu ? " show" : "";
  return (
    <header className="container-fluid p-3">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid" id="nav-container">
          <Link to="/" className="navbar-brand p-2 m-0">
            <img src="/images/logga-notagline.png" className="logo" alt="" />
          </Link>
          <button
            className="navbar-toggler p-2"
            type="button"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon icon={faBars} className="fa-3x" />
          </button>
          <div className={"collapse navbar-collapse mt-3 px-2" + show}>
            <ul className="navbar-nav">
              <li className="nav-item mx-0 mx-lg-2 align-self-end">
                <Link className="nav-link" to="/">
                  Hem
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-2 align-self-end">
                <Link className="nav-link" to="/services">
                  Tjänster
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-2 align-self-end">
                <Link className="nav-link" to="/forsale">
                  Objekt till salu
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-2 align-self-end">
                <Link className="nav-link" to="/about">
                  Om oss
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-2 align-self-end">
                <Link className="nav-link" to="/blog">
                  Blogg
                </Link>
              </li>
              <li className="nav-item mx-0 mx-lg-2 align-self-end">
                <Link className="nav-link" to="/contact">
                  Kontakta oss
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
